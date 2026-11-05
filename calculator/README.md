# Container load calculator source

Edit `template.html` and the matching `locales/zh.json` / `locales/en.json`
dictionaries, then run `npm run build:calculator`. The files in `public/tools/`
are generated outputs and must not be edited separately.

Both languages share the exact same packing, 3D, import, validation, PDF, Excel
and print implementation. Dictionary tokens are resolved before writing static
HTML; the page does not replace its text at runtime. Raw Chinese literal segments
are retained exactly to preserve the existing Chinese calculator. English uses
separate `ccalc.en.*` storage keys so Chinese sample names cannot leak through a
saved Chinese calculator session.

The generator uses only Node built-ins, validates dictionary parity and parses
inline scripts before writing files. Run it explicitly when changing calculator
source; the normal Next.js build uses the checked-in generated HTML files.
