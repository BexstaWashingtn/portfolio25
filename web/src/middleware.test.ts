import { describe, expect, it } from "vitest";
import { verifyAccessToken } from "./middleware";

const NOW = 1_750_000_000;

/** Kodiert Testdaten genauso als Base64URL wie die produktive Middleware. */
const toBase64Url = (bytes: Uint8Array) => {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
};

const createKey = () =>
  crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode("a-secure-test-secret"),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );

/** Erzeugt einen korrekt signierten Token für die jeweilige Payload. */
const createToken = async (
  key: CryptoKey,
  payload: unknown,
): Promise<string> => {
  const payloadBytes = new TextEncoder().encode(JSON.stringify(payload));
  const signature = await crypto.subtle.sign("HMAC", key, payloadBytes);

  return `${toBase64Url(payloadBytes)}.${toBase64Url(new Uint8Array(signature))}`;
};

describe("verifyAccessToken", () => {
  it("akzeptiert einen korrekt signierten und aktiven Token", async () => {
    const key = await createKey();
    const token = await createToken(key, {
      iat: NOW - 60,
      exp: NOW + 60,
      g: 1,
    });

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(true);
  });

  it.each([
    "not-a-token",
    "too.many.token.parts",
    "invalid!*base64.signature",
    `${"a".repeat(2049)}.signature`,
  ])("lehnt den fehlerhaften Token %s ohne Ausnahme ab", async (token) => {
    const key = await createKey();

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(false);
  });

  it("lehnt einen Token mit ungültigem JSON ab", async () => {
    const key = await createKey();
    const payloadBytes = new TextEncoder().encode("not-json");
    const signature = await crypto.subtle.sign("HMAC", key, payloadBytes);
    const token = `${toBase64Url(payloadBytes)}.${toBase64Url(new Uint8Array(signature))}`;

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(false);
  });

  it("lehnt einen Token mit falscher Signatur ab", async () => {
    const key = await createKey();
    const otherKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode("a-different-test-secret"),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign", "verify"],
    );
    const token = await createToken(otherKey, {
      iat: NOW - 60,
      exp: NOW + 60,
      g: 1,
    });

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(false);
  });

  it("lehnt einen abgelaufenen Token ab", async () => {
    const key = await createKey();
    const token = await createToken(key, {
      iat: NOW - 120,
      exp: NOW - 1,
      g: 1,
    });

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(false);
  });

  it("lehnt einen in der Zukunft ausgestellten Token ab", async () => {
    const key = await createKey();
    const token = await createToken(key, {
      iat: NOW + 1,
      exp: NOW + 120,
      g: 1,
    });

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(false);
  });

  it("lehnt einen Token ohne erforderliche Zugangsberechtigung ab", async () => {
    const key = await createKey();
    const token = await createToken(key, {
      iat: NOW - 60,
      exp: NOW + 60,
    });

    await expect(verifyAccessToken(token, key, NOW)).resolves.toBe(false);
  });
});
