# fläsh. Toothpaste – Faltschachteln und Tuben, alle fünf Sorten

Präsentationsseite mit den 3D-Visualisierungen des neuen Designs (Grundlage: 17_FLAESH_PACK_CDB_2026.pdf, Schachteln Seite 2, 6, 10, 14, 18; Tuben Seite 4, 8, 12, 16, 20; Stand 15. November 2026 – gegenüber 16 nur die Vorderseite von Coconut-Salt geändert).
Die fünf Sorten: Sensitive Care & Protect Wintergreen (REF 3334), Whitening Care & Repair Lime-Mint Version WHITEsmile (REF 3320) und Version Bluedenta (REF 3330), Coconut-Salt (REF 3325), Ginger-Orange (REF 3323). Jede Ansicht zeigt alle fünf in einem Bild.

- `index.html` – statische Seite, kein Build-Schritt nötig (Vercel: Framework „Other“, Output = Repo-Root)
- `img/` – Web-Ansichten, `img/gross/` – große Ansichten für die Lightbox
  - `vorne_alle` – alle fünf Schachteln, Vorderseite schräg (Hero)
  - `vorne_turm` – Vorderseite frontal, gestapelt
  - `werbefeld_turm` – Werbefeld schräg, gestapelt (Schachteln auf dem Rücken)
  - `rueck_turm`, `rueck_schraeg` – Rückseite frontal und schräg von links (Schachteln gewendet)
  - `tuben_liegend`, `tuben_stehend` – Tuben liegend (Vorderseite) und stehend auf der Kappe (Rückseite)
- Schrift: Inter (SIL Open Font License, siehe `assets/fonts/LICENSE-Inter.txt`), lokal eingebunden

Die Seite ist per `robots.txt` und `X-Robots-Tag` von Suchmaschinen ausgeschlossen.
