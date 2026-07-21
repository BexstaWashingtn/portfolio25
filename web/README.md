# Persönliches Portfolio – Next.js / React

Dieses Projekt ist mein persönliches Portfolio.  
Es zeigt eine Übersicht über meine Arbeit als Webentwickler, mit Fokus auf **React**, **Next.js**, **UX/UI**, **Barrierefreiheit** und modernen Frontend-Technologien.

Das Portfolio befindet sich in aktiver Weiterentwicklung und wächst kontinuierlich um neue Inhalte und Projekte.

---

## Technologien

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- Zod (Formvalidierung)
- React Hook Form
- Semantisches HTML / Barrierefreiheit
- Modulare Komponentenstruktur

---

## Features

- Klar strukturierte Navigations- und Layout-Architektur
- Kontaktformular mit:
  - Zod-Validierung
  - React Hook Form
  - Honeypot-Mechanismus
  - clientseitigen Fehlermeldungen
- Nutzung von **Environment-Variablen** für Kontaktdaten
- Barriereorientierter Aufbau (Rollen, Labels, semantische Elemente)
- Modulares Komponenten-Design
- Responsives Layout

---

## Live-Version

https://portfolio.tomasbee.de/?freeentry

Die Live-Version ist identisch mit dem Code im main-Branch und enthält vollständig gepflegte Inhalte.

---

## Tests

Die automatisierten Tests werden mit **Vitest** ausgeführt. Die aktuelle
Testsuite liegt in `src/middleware.test.ts` und prüft die Validierung des
signierten Zugangscookies.

Abgedeckt sind folgende Fälle:

- Ein korrekt signierter, noch gültiger Token wird akzeptiert.
- Fehlerhaft aufgebaute und zu große Tokens werden ohne Ausnahme abgelehnt.
- Eine ungültige JSON-Payload wird abgelehnt.
- Eine falsche HMAC-Signatur wird erkannt.
- Abgelaufene Tokens werden abgelehnt.
- Tokens mit einem Ausstellungsdatum in der Zukunft werden abgelehnt.
- Tokens ohne die erforderliche Zugangsberechtigung `g: 1` werden abgelehnt.

Die Tests verwenden eine feste Uhrzeit und eigens erzeugte HMAC-Schlüssel.
Dadurch sind sie deterministisch und benötigen weder echte Zugangsdaten noch
Environment-Variablen.

Alle Tests einmalig ausführen:

```bash
npm test
```

Tests während der Entwicklung im Watch-Modus ausführen:

```bash
npm run test:watch
```

Beim Ergänzen neuer Regeln in `verifyAccessToken` sollte mindestens ein Test
für den gültigen Fall und je ein Test für die neuen Ablehnungsgründe
hinzugefügt werden.

---

## Installation & Entwicklung

```bash
git clone https://github.com/BexstaWashingtn/portfolio25
cd portfolio25
npm install
npm run dev
```
