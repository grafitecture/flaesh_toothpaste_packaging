# fläsh. Toothpaste – Faltschachteln und Tuben, alle fünf Sorten

Präsentationsseite mit den 3D-Visualisierungen des neuen Designs (Grundlage: 17_FLAESH_PACK_CDB_2026.pdf, Schachteln Seite 2, 6, 10, 14, 18; Tuben Seite 4, 8, 12, 16, 20; Stand 15. November 2026 – gegenüber 16 die Vorderseite von Coconut-Salt geändert; in der überarbeiteten 17 außerdem die Zahnwurzeln im Zahnsymbol aufgehellt: alle fünf Schachteln und die vier Whitening-Tuben, neu gerendert `vorne_alle`, `vorne_turm`, `werbefeld_turm`, `tuben_liegend`).
Die fünf Sorten: Sensitive Care & Protect Wintergreen (REF 3334), Whitening Care & Repair Lime-Mint Version WHITEsmile (REF 3320) und Version Bluedenta (REF 3330), Coconut-Salt (REF 3325), Ginger-Orange (REF 3323). Jede Ansicht zeigt alle fünf in einem Bild.

- `index.html` – statische Seite, kein Build-Schritt nötig (Vercel: Framework „Other“, Output = Repo-Root)
- `img/` – Web-Ansichten, `img/gross/` – große Ansichten für die Lightbox
  - `vorne_alle` – alle fünf Schachteln, Vorderseite schräg (Hero)
  - `vorne_turm` – Vorderseite frontal, gestapelt
  - `werbefeld_turm` – Werbefeld schräg, gestapelt (Schachteln auf dem Rücken)
  - `rueck_turm`, `rueck_schraeg` – Rückseite frontal und schräg von links (Schachteln gewendet)
  - `tuben_liegend`, `tuben_stehend` – Tuben liegend (Vorderseite) und stehend auf der Kappe (Rückseite)
  - `v2_…`, `v3_…`, `v4_…` – Varianten 2 bis 4 aus 18_FLAESH_PACK_CDB_2026.pdf (Seite 22–25, 27–30, 32–35), je vier Schachteln (Sensitive, Lime-Mint, Coconut-Salt, Ginger-Orange) in den Ansichten `vorne_alle`, `vorne_turm`, `werbefeld_turm`, `rueck_turm`, `rueck_schraeg`; auf der Seite im Abschnitt „Varianten“ mit Umschalter
- Schrift: Inter (SIL Open Font License, siehe `assets/fonts/LICENSE-Inter.txt`), lokal eingebunden

Die Seite ist per `robots.txt` und `X-Robots-Tag` von Suchmaschinen ausgeschlossen.
