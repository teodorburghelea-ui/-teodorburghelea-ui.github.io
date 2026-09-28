# Teodor Burghelea — professional website

Live site: https://teodorburghelea-ui.github.io

Plain HTML/CSS; no build step. Every page is a normal `.html` file you can edit directly on GitHub
(open the file → pencil icon → edit → "Commit changes"). The site updates about a minute later.

| File | Page |
|---|---|
| `index.html` | Home (intro, news, research themes) |
| `research.html` | Research topics, figures, talks |
| `publications.html` | Book, theses, journal articles |
| `team.html` | Group leader bio, members, alumni, collaborators, photos |
| `teaching.html` | Courses and lecture notes |
| `contact.html` | Address, e-mail, map |
| `assets/style.css` | Colours, fonts and layout for all pages |
| `assets/img/`, `assets/media/` | Images and videos |

**Add a news item:** in `index.html`, copy one `<li><time>…</time><p>…</p></li>` block inside `<ul class="news">` and paste it at the top.

**Add a publication:** in `publications.html`, copy one `<li>…</li>` entry inside the right year's `<ol class="pubs">`.

**Add an image:** upload it to `assets/img/` (keep it under ~300 KB), then reference it as `assets/img/name.jpg`.
