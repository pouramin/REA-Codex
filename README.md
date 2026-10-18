# REA + Codex — A Practical Reverse Engineering Guide

A bilingual (English and Persian), single-page companion to the TunnelLab video on using REA and Codex to investigate an installed Electron application and independently implement selected functionality.

**English (default):** https://pouramin.github.io/REA-Codex/

**Persian (فارسی):** https://pouramin.github.io/REA-Codex/?lang=fa

Switch languages instantly with the button in the header. Persian uses a right-to-left layout and Vazirmatn; technical prompts remain in English.

## What's included

- Windows prerequisites and REA MCP setup for local Codex.
- PowerShell commands for finding `app.asar` and other `.asar` archives.
- Browser-based, permission-controlled folder selection that identifies ASAR filenames locally.
- Editable workspace and target-package paths, dynamically inserted into the prompts and preserved when switching languages.
- Seven copy-ready prompts: ASAR discovery, preflight, targeted investigation, independent app development, validation, final reporting, and MCP troubleshooting.
- Guidance on what can and cannot be inferred from reverse-engineering evidence.

## GitHub Pages deployment

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose the **main** branch and **/(root)** directory.
4. Save and wait for publication.

This is a static website: no build step, backend, account, or API key is required.

## Files

- `index.html` — page markup, responsive styles, interactive ASAR finder, and prompt templates.
- `i18n.js` — English/Persian localization, RTL switching, and translated interactive messages.
- `README.md` — this documentation.
- `.nojekyll` — disables Jekyll processing to preserve prompt template placeholders.

## Privacy and limitations

- Custom paths stay in the visitor's browser. They are not uploaded or stored by this website.
- Browser folder scanning only inspects a folder that the visitor explicitly selects; it does not expose absolute filesystem paths.
- ASAR files are common in Electron applications, but not all apps use the ASAR format.
- This repository does **not** distribute proprietary Xmind source code, application binaries, or assets.
- Investigate software only where permitted by applicable law and license terms.
- REA-assisted investigation does not imply complete original source recovery, and an independently rebuilt app is not the original application.

## Links

- [REA](https://rea.tools/)
- [Codex](https://openai.com/codex/)
- [TunnelLab GitHub profile](https://github.com/pouramin)
