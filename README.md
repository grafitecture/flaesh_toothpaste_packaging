# fläsh. Sensitive Care – Faltschachtel und Tube im neuen Design

Präsentationsseite mit den 3D-Visualisierungen des neuen Designs (Grundlage: 09_FLAESH_PACK_CDB_2026.pdf, Seiten 3 und 5; Rückseiten hell/dunkel aus 10_FLAESH_PACK_CDB_2026.pdf, Seiten 2 und 3; Stand 11. November 2026):
Vorderseite mit neuem Zahnsymbol, Bluedenta-Seite (Werbefeld), Rückseite hell und dunkel, das Zahnsymbol in der Vergrößerung und die Tube (Seite 5).

- `index.html` – statische Seite, kein Build-Schritt nötig (Vercel: Framework „Other“, Output = Repo-Root)
- `img/` – Web-Ansichten, `img/gross/` – große Ansichten für die Lightbox
  - `hero` – Vorderseite und Bluedenta-Seite zusammen
  - `vorne`, `vorne_gerade` – Vorderseite schräg und frontal
  - `bluedenta`, `bluedenta_gerade` – Werbefeld mit Bluedenta-Feld, schräg und frontal
  - `rueck_gruppe`, `rueck_hell(_gerade)`, `rueck_dunkel(_gerade)` – Rückseite mit Pflichttext und Strichcode, helle (Seite 2) und dunkle (Seite 3) Variante
  - `zahn_gerade`, `zahn` – Zahnsymbol vergrößert, frontal und schräg
  - `tube_vorne`, `tube_hinten` – Tube liegend (Vorderseite) und stehend (Rückseite)
- Schrift: Inter (SIL Open Font License, siehe `assets/fonts/LICENSE-Inter.txt`), lokal eingebunden

Die Seite ist per `robots.txt` und `X-Robots-Tag` von Suchmaschinen ausgeschlossen.
