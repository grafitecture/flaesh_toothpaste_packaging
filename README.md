# fläsh. Sensitive Care – Finales Design Faltschachtel und Tube

Präsentationsseite mit den 3D-Visualisierungen des finalen Designs (Grundlage: 08_FLAESH_PACK_CDB_2026.pdf, Stand 6. November 2026):
liegende Faltschachtel mit gleicher Vorderseite und drei Rückseiten-Varianten, weiße Tube und Innendruck.

- `index.html` – statische Seite, kein Build-Schritt nötig (Vercel: Framework „Other“, Output = Repo-Root)
- `img/` – Web-Ansichten, `img/gross/` – große Ansichten für die Lightbox
  - `hero`, `vorne`, `vorne_gerade` – Vorderseite
  - `rueck_gruppe`, `rueck_a|b|c`, `rueckgerade_a|b|c` – Rückseite, Variante A (PDF-Seite 2), B (Seite 3), C (Seite 4)
  - `tube_vorne`, `tube_hinten`, `innenseite`
- `download/` – alle Ansichten als PDF
- Schrift: Inter (SIL Open Font License, siehe `assets/fonts/LICENSE-Inter.txt`), lokal eingebunden

Die Seite ist per `robots.txt` und `X-Robots-Tag` von Suchmaschinen ausgeschlossen.
