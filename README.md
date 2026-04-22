# Portfolio v1 – Next.js / React

Dieses Projekt ist mein persönliches Portfolio als Webentwickler.
Es dient sowohl als Präsentation meiner Arbeiten als auch als technische Grundlage, um moderne Frontend-Architekturen praktisch umzusetzen und weiterzuentwickeln.

Der Fokus liegt auf:

- React & Next.js (App Router)
- sauberer Komponentenarchitektur
- Barrierefreiheit (Accessibility)
- strukturierter Datenverarbeitung über ein Headless CMS

Das Projekt befindet sich in aktiver Weiterentwicklung.

---

## Architektur

Das Repository ist in zwei Hauptbereiche aufgeteilt:

```
/web     → Next.js Frontend (Portfolio)
/studio  → Sanity Studio (Content Management System)
```

- Das **Frontend** rendert Inhalte
- Das **Studio** verwaltet Inhalte
- Beide sind **klar voneinander getrennt**

---

## Technologien (Frontend)

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- Zod (Formvalidierung)
- React Hook Form
- Semantisches HTML / Barrierefreiheit
- Eigene modulare Komponentenstruktur

---

## CMS (Content Management)

Für die Inhaltsverwaltung wird ein Headless CMS verwendet:

- Sanity Studio (im `/studio`-Ordner)
- Strukturierte Content-Modelle (Schemas)
- Datenabfrage über GROQ im Frontend

Ziel:
Content pflegen, ohne den Frontend-Code ändern zu müssen.

---

## Features

- Modulare und skalierbare Komponentenarchitektur
- Klare Trennung von Daten und Darstellung
- Barriereorientierter Aufbau:
  - semantische HTML-Struktur
  - Labels, Rollen und zugängliche Interaktionen

- Responsives Layout
- Dynamische Projektseiten

### Kontaktformular

- Zod-Validierung
- React Hook Form
- Honeypot-Mechanismus
- Clientseitige Fehlermeldungen
- Nutzung von Environment-Variablen

---

## Live-Version

https://portfolio.tomasbee.de/?freeentry

Die Live-Version basiert auf dem aktuellen `main`-Branch.

---

## Installation & Entwicklung

```bash
git clone https://github.com/BexstaWashingtn/portfolio25
cd portfolio25/web
npm install
npm run dev
```

---

## Entwicklungshinweise

- Inhalte werden perspektivisch vollständig über das CMS gepflegt
- Komponenten sind bewusst klein und wiederverwendbar gehalten
- Daten werden vor der Übergabe an Komponenten bereinigt und validiert
- Fokus liegt auf nachvollziehbarer Struktur statt schneller Umsetzung

---

## Nächste Schritte

- Vollständige Integration von Sanity ins Frontend
- Erweiterung der Content-Modelle (z. B. About, Skills)
- Optimierung der Datenabfragen (GROQ)
- Weiterer Ausbau der Barrierefreiheit
- Performance-Optimierungen

---

## Hinweis

Dieses Projekt dient nicht nur als Portfolio, sondern auch als Lern- und Entwicklungsumgebung, um Architekturentscheidungen und Best Practices praktisch zu erarbeiten.
