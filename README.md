# fläsh. Sensitive Care – Faltschachtel und Tube 3D

Präsentationsseite mit den 3D-Visualisierungen der neuen Zahnpasta-Faltschachtel in acht Farbvorschlägen,
der weißen Tube und der bedruckten Innenseite (Grundlage: 07_FLAESH_PACK_CDB_2026.pdf, Stand 5. November 2026).

- `index.html` – statische Seite, kein Build-Schritt nötig (Vercel: Framework „Other“, Output = Repo-Root)
- `img/` – Web-Ansichten, `img/gross/` – große Ansichten für die Lightbox
  - `f1…f8_vorne|hinten|liegend|tube` – je Farbvorschlag
  - `gruppe_alle`, `gruppe_mint` (1/3/5/7), `gruppe_hell` (2/4/6/8)
  - `tube_vorne`, `tube_hinten`, `innenseite`
- `download/` – Übersicht aller Ansichten als PDF
- Schrift: Inter (SIL Open Font License, siehe `assets/fonts/LICENSE-Inter.txt`), lokal eingebunden

Die Seite ist per `robots.txt` und `X-Robots-Tag` von Suchmaschinen ausgeschlossen.
