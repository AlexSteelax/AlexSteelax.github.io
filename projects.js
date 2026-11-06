(function () {
  "use strict";

  var USER = "AlexSteelax";
  var REPOS_URL = "https://api.github.com/users/" + USER + "/repos?sort=updated&per_page=100";
  var PROJECTS_COUNT = 6;

  function formatDate(iso) {
    var d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function escapeHtml(text) {
    if (!text) return "";
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function buildProjectCard(repo) {
    var lang =
      repo.language && repo.language.trim() !== ""
        ? '<span class="project-meta"><span class="dot" aria-hidden="true">●</span>' +
          escapeHtml(repo.language) +
          "</span>"
        : "";

    var stars =
      repo.stargazers_count > 0
        ? '<span class="project-meta">★ ' + repo.stargazers_count + "</span>"
        : "";

    var updated =
      '<span class="project-meta">🕒 ' + formatDate(repo.pushed_at) + "</span>";

    var description = repo.description
      ? escapeHtml(repo.description)
      : '<em class="muted">—</em>';

    return (
      '<a class="project-card" href="' +
      escapeHtml(repo.html_url) +
      '" target="_blank" rel="noopener">' +
      '<span class="project-name">' +
      escapeHtml(repo.name) +
      "</span>" +
      '<span class="project-desc">' +
      description +
      "</span>" +
      '<span class="project-meta-wrap">' +
      lang +
      stars +
      updated +
      "</span>" +
      "</a>"
    );
  }

  function renderProjects() {
    var grids = document.querySelectorAll(".projects-grid");
    if (!grids.length) return;

    fetch(REPOS_URL)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("GitHub API error: " + response.status);
        }
        return response.json();
      })
      .then(function (repos) {
        var html = repos
          .filter(function (repo) {
            return !repo.fork && !/^[^.]+\.github\.io$/.test(repo.name);
          })
          .slice(0, PROJECTS_COUNT)
          .map(buildProjectCard)
          .join("");
        grids.forEach(function (grid) {
          grid.innerHTML = html;
        });
      })
      .catch(function () {
        grids.forEach(function (grid) {
          grid.innerHTML = '<p class="muted">⚑ GitHub API error</p>';
        });
      });
  }

  renderProjects();
})();