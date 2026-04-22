# Sanity Studio – Portfolio v1

Dieses Verzeichnis enthält das **Sanity Studio** für das Portfolio-Projekt.
Hier werden alle Inhalte gepflegt, die später im Frontend (Next.js) angezeigt werden.

## Zweck

Das Studio dient als **Headless CMS**, um Projektdaten zentral zu verwalten, ohne den Code im Frontend anfassen zu müssen.

Typische Inhalte:

- Projekte (Titel, Beschreibung, Techstack, Bilder, etc.)
- Strukturierte Daten für die Portfolio-Seiten

## Tech Stack

- Sanity Studio
- TypeScript
- Schema-basierte Content-Struktur

## Projektstruktur

```
studio/
├── schemaTypes/        # Content-Modelle (z.B. projectType)
├── sanity.config.ts    # Hauptkonfiguration
├── sanity.cli.ts       # CLI-Konfiguration
├── package.json
└── static/             # Statische Assets
```

## Entwicklung starten

```bash
npm install
npm run dev
```

Das Studio läuft dann lokal unter:

```
http://localhost:3333
```

## Content-Modell

Die Inhalte werden über sogenannte **Schemas** definiert.
Ein Beispiel ist der Dokumententyp:

- `project`

Dieser beschreibt die Struktur eines Projekts (z. B. Titel, Beschreibung, Technologien).

Schemas befinden sich in:

```
/schemaTypes
```

## Deployment

Das Studio kann separat deployed werden (z. B. über Sanity Hosting oder Vercel).

Wichtig:

- Studio und Frontend sind **entkoppelt**
- Das Frontend greift über API (GROQ Queries) auf die Daten zu

## Verbindung zum Frontend

Das Next.js-Frontend nutzt:

- Projekt-ID
- Dataset
- API-Zugriff über Sanity Client

Die Daten werden per Query (GROQ) abgefragt und im Frontend gerendert.

## Hinweise

- Änderungen im Schema erfordern oft einen Neustart des Studios
- Validierungen werden direkt im Schema definiert
- Strukturierte Daten erleichtern später das Rendern im Frontend erheblich

## Nächste Schritte

- Weitere Dokumententypen definieren (z. B. About, Skills)
- Validierungen erweitern
- Struktur für komplexere Inhalte optimieren
