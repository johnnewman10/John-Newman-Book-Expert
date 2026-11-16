# John Newman: Book Marketing Website (plain HTML/CSS/JS)
Open `index.html` in VS Code with the Live Server extension (or just double-click it).
- **Logo / photo:** save `brandlogo.png` and `profilepicture.png` into `images/`. They appear automatically; until then a text brand and a typographic panel show.
- **Forms:** use your Formspree endpoint (xqpprlqo). Formspree may ask you to confirm your email on first submission. Success shows only when Formspree confirms.
- **Domain:** edit `SITE_URL` at the top of `build.js`, then run `node build.js` (needs Node) to refresh canonical URLs and the sitemap.
- **Content:** edit `data.ts` (services, packages, FAQs, blog) and re-run the build. Or edit the .html files directly.
- **Analytics / Search Console:** paste your snippets where the comments in each page's `<head>` indicate. Not connected until you do.
