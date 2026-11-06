"use strict";

var fs = require("fs");
var path = require("path");

var RESUME = require("./data.js");

/* ---------- Преобразование данных ---------- */

/* Стаж считается динамически в браузере (см. buildLangScript) */

/* ---------- Текстовые билдеры (наследуют данные из data.js) ---------- */

function buildContacts(contacts) {
  return (
    '<ul class="contacts">' +
    contacts
      .map(function (c) {
        return (
          '<li><a href="' +
          c.href +
          '"' +
          (/^https?:/.test(c.href) ? ' target="_blank" rel="noopener"' : "") +
          ">" +
          c.icon +
          " " +
          c.label +
          "</a></li>"
        );
      })
      .join("") +
    "</ul>"
  );
}

function buildProfile(p) {
  return (
    '<header class="profile">' +
    '<h1 class="profile-name">' +
    p.name +
    "</h1>" +
    buildContacts(p.contacts) +
    "</header>"
  );
}

function buildFocus(d) {
  var tags = d.profile.tags
    .map(function (t) {
      return '<span class="focus-tag">' + t + "</span>";
    })
    .join("");
  return '<div class="focus-tags">' + tags + "</div>";
}

function buildAbout(d) {
  return (
    '<section class="card">' +
    "<h2>" +
    d.aboutTitle +
    "</h2>" +
    d.about.map(function (p) { return "<p>" + p + "</p>"; }).join("") +
    "</section>"
  );
}

function buildExperience(exp, lang) {
  var groups = exp.groups
    .map(function (group) {
      var items = group.items
        .map(function (item) {
          return (
            '<p class="role-line"><span class="role">' +
            item.company +
            '</span><span class="role-sep"> — </span><span class="role-title">' +
            item.role +
            "</span></p>"
          );
        })
        .join("");
      return '<h3 class="subhead">' + group.title + "</h3>" + items;
    })
    .join("");

  return (
    '<section class="card">' +
    '<h2 data-since="' +
    exp.since +
    '">' +
    exp.header +
    "</h2>" +
    '<div class="experience-groups">' +
    groups +
    "</div>" +
    "</section>"
  );
}

function buildEducation(e) {
  return (
    '<section class="card">' +
    "<h2>" +
    e.title +
    "</h2>" +
    "<p><b>" +
    e.degree +
    "</b><br>" +
    e.field +
    "</p>" +
    "</section>"
  );
}

function buildSkills(d) {
  var tags =
    '<div class="tags">' +
    d.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") +
    "</div>";

  return '<div class="skills-tags">' + tags + "</div>";
}

function buildLangHead(d, lang, hidden) {
  var hiddenAttr = hidden ? ' hidden' : "";
  return (
    '<section class="lang-block" data-lang="' +
    lang +
    '"' +
    hiddenAttr +
    ">" +
    buildProfile(d.profile) +
    buildFocus(d) +
    buildAbout(d) +
    "</section>"
  );
}

function buildLangTail(d, lang, hidden) {
  var hiddenAttr = hidden ? ' hidden' : "";
  return (
    '<section class="lang-block" data-lang="' +
    lang +
    '"' +
    hiddenAttr +
    ">" +
    buildExperience(d.experience, lang) +
    buildSkills(d) +
    "</section>"
  );
}

function buildProjectsLang(d, lang, hidden) {
  var hiddenAttr = hidden ? ' hidden' : "";
  return (
    '<section class="card lang-block" data-lang="' +
    lang +
    '"' +
    hiddenAttr +
    ">" +
    "<h2>" +
    d.projects.title +
    "</h2>" +
    '<p class="muted">' +
    d.projects.desc +
    "</p>" +
    '<div class="projects-grid">' +
    '<p class="muted">' +
    d.projectsLoading +
    "</p></div>" +
    "</section>"
  );
}

function buildPage() {
  var ru = RESUME.ru;
  var en = RESUME.en;

  var year = new Date().getFullYear();

  return (
    '<!DOCTYPE html>\n' +
    '<html lang="ru" data-lang="ru">\n' +
    "<head>\n" +
    '  <meta charset="UTF-8">\n' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '  <meta name="description" content="Стальнов Александр — ведущий C#/.NET разработчик. Резюме и проекты.">\n' +
    '  <meta property="og:title" content="AlexSteelax — C#/.NET Developer">\n' +
    '  <meta property="og:description" content="Ведущий C#/.NET разработчик (High-load, Streaming, Distributed Systems). Резюме и проекты.">\n' +
    '  <meta property="og:type" content="profile">\n' +
    "  <title>AlexSteelax — C#/.NET Developer</title>\n" +
    "  <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>\">\n" +
    '  <link rel="stylesheet" href="styles.css">\n' +
    "</head>\n" +
    "<body>\n" +
    '  <header class="site-header">\n' +
    '    <div class="container header-inner">\n' +
    '      <div class="lang-switch" id="langSwitch" role="group" aria-label="Language">\n' +
    '        <button type="button" class="lang-btn is-active" data-lang-target="ru" aria-pressed="true">RU</button>\n' +
    '        <button type="button" class="lang-btn" data-lang-target="en" aria-pressed="false">EN</button>\n' +
    "      </div>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "\n" +
    "  <main class=\"container\">\n" +
    buildLangHead(ru, "ru", false) +
    "\n" +
    buildProjectsLang(ru, "ru", false) +
    "\n" +
    buildLangTail(ru, "ru", false) +
    "\n" +
    buildLangHead(en, "en", true) +
    "\n" +
    buildProjectsLang(en, "en", true) +
    "\n" +
    buildLangTail(en, "en", true) +
    "\n" +
    "  </main>\n" +
    "\n" +
    '  <footer class="site-footer">\n' +
    '    <div class="container">\n' +
    '      <span class="footer-lang" data-lang="ru">© ' +
    year +
    " Стальнов Александр · C#/.NET Developer</span>\n" +
    '      <span class="footer-lang" data-lang="en" hidden>© ' +
    year +
    " Alexander Stalnov · C#/.NET Developer</span>\n" +
    "    </div>\n" +
    "  </footer>\n" +
    "\n" +
    buildLangScript() +
    '  <script src="projects.js"></script>\n' +
    "</body>\n" +
    "</html>\n"
  );
}

function buildLangScript() {
  return (
    "  <script>\n" +
    "(function () {\n" +
    "  'use strict';\n" +
    "  var KEY = 'alexsteelax-lang';\n" +
    "  var langSwitch = document.getElementById('langSwitch');\n" +
    "  var blocks = document.querySelectorAll('.lang-block');\n" +
    "  var footers = document.querySelectorAll('.footer-lang');\n" +
    "  var active = 'ru';\n" +
    "  function plural(n, f) {\n" +
    "    var m10 = n % 10, m100 = n % 100;\n" +
    "    if (m10 === 1 && m100 !== 11) return f[0];\n" +
    "    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return f[1];\n" +
    "    return f[2];\n" +
    "  }\n" +
    "  function fmtDuration(since, ru) {\n" +
    "    var start = new Date(since), now = new Date();\n" +
    "    var years = now.getFullYear() - start.getFullYear();\n" +
    "    var months = now.getMonth() - start.getMonth();\n" +
    "    if (now.getDate() < start.getDate()) months--;\n" +
    "    if (months < 0) { years--; months += 12; }\n" +
    "    if (ru) return years + ' ' + plural(years, ['год', 'года', 'лет']);\n" +
    "    return years + 'y';\n" +
    "  }\n" +
    "  function fillDurations() {\n" +
    "    var ru = active === 'ru';\n" +
    "    var els = document.querySelectorAll('[data-since]');\n" +
    "    for (var i = 0; i < els.length; i++) {\n" +
    "      var el = els[i];\n" +
    "      if (!el.getAttribute('data-tpl')) el.setAttribute('data-tpl', el.textContent);\n" +
    "      el.textContent = el.getAttribute('data-tpl').replace('{N}', fmtDuration(el.getAttribute('data-since'), ru));\n" +
    "    }\n" +
    "  }\n" +
    "  function apply() {\n" +
    "    document.documentElement.lang = active;\n" +
    "    document.documentElement.setAttribute('data-lang', active);\n" +
    "    for (var i = 0; i < blocks.length; i++) blocks[i].hidden = blocks[i].getAttribute('data-lang') !== active;\n" +
    "    for (var j = 0; j < footers.length; j++) footers[j].hidden = footers[j].getAttribute('data-lang') !== active;\n" +
    "    var btns = langSwitch.querySelectorAll('.lang-btn');\n" +
    "    for (var k = 0; k < btns.length; k++) {\n" +
    "      var isActive = btns[k].getAttribute('data-lang-target') === active;\n" +
    "      btns[k].classList.toggle('is-active', isActive);\n" +
    "      btns[k].setAttribute('aria-pressed', isActive ? 'true' : 'false');\n" +
    "    }\n" +
    "    fillDurations();\n" +
    "  }\n" +
    "  langSwitch.addEventListener('click', function (e) {\n" +
    "    var b = e.target.closest('.lang-btn');\n" +
    "    if (b) { active = b.getAttribute('data-lang-target'); apply(); localStorage.setItem(KEY, active); }\n" +
    "  });\n" +
    "  try { var s = localStorage.getItem(KEY); if (s === 'en') active = 'en'; } catch (err) {}\n" +
    "  apply();\n" +
    "})();\n" +
    "  </script>\n"
  );
}

/* ---------- Запись результата ---------- */

var out = path.join(__dirname, "index.html");
fs.writeFileSync(out, buildPage(), "utf8");
console.log("index.html built (" + fs.statSync(out).size + " bytes)");