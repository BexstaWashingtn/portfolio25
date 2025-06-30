// src/lib/api.ts
export async function getWpPosts() {
  const res = await fetch("https://deine-domain.de/wp-json/wp/v2/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Fehler beim Abrufen der Beiträge");
  }

  return res.json();
}

export async function getWpPages() {
  const res = await fetch("https://deine-domain.de/wp-json/wp/v2/pages", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Fehler beim Abrufen der Beiträge");
  }

  return res.json();
}

export async function getWpProjects() {
  const res = await fetch(
    "http://cimdata-test-09.projektwechsel.digital/wp-json/wp/v2/projekte",
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Fehler beim Abrufen der Beiträge");
  }

  return res.json();
}
