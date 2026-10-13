/*
  Project catalog for GitHub Pages.
  Add work by copying one object in this array and replacing its values.
  Required: name, category, categoryLabel, type, description, technologies,
  demo, repository. Keep a comma between objects.
  `category` must match a filter in portfolio.html.
  `featured: true` also shows the project on the homepage (up to two).
  `visual` can be apparel, food, or generic; preview fields are optional.
*/
window.TRYCODE_PROJECTS = [
  {
    name: "Pratama Apparel",
    category: "website",
    categoryLabel: "Website & landing page",
    type: "WEBSITE / E-COMMERCE",
    description: "Katalog apparel custom dengan quick view, panduan ukuran, dan keranjang multi-item. Tinggal pilih, lalu lanjut pesan lewat WhatsApp.",
    technologies: ["React", "Tailwind CSS", "Vite", "WhatsApp Order"],
    demo: "https://trycodestudio.github.io/apparelshop-lp/",
    repository: "https://github.com/trycodestudio/apparelshop-lp",
    status: "Live",
    featured: true,
    visual: "apparel",
    previewLabel: "MADE FOR YOUR TEAM",
    previewTitle: "Wear it.\nOwn it.",
    previewText: "Jersey dan apparel custom"
  },
  {
    name: "Abbasy",
    category: "website",
    categoryLabel: "Website & landing page",
    type: "WEBSITE / FOOD & DRINKS",
    description: "Rumah online untuk fast food lokal Berau: menu andalan, info cabang, dan jalan pintas pesan lewat WhatsApp, GoFood, atau GrabFood.",
    technologies: ["HTML", "CSS", "JavaScript", "Food delivery"],
    demo: "https://trycodestudio.github.io/abbasy-lp/",
    repository: "https://github.com/trycodestudio/abbasy-lp",
    status: "Live",
    featured: true,
    visual: "food",
    previewLabel: "AYAM MABAR & BURGER",
    previewTitle: "Laper?\nGaskeun.",
    previewText: "Pesan enak, tinggal pilih"
  }
];

(function () {
  var projects = window.TRYCODE_PROJECTS;

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
    });
  }

  function lineBreaks(value) {
    return escapeHTML(value).replace(/\n/g, "<br />");
  }

  function safeURL(value) {
    var url = String(value == null ? "" : value);
    return /^https:\/\/[^\s"'<>]+$/i.test(url) ? escapeHTML(url) : "#";
  }

  function artwork(project, home) {
    var frame = home ? "home-window" : "window";
    var bar = home ? "home-window-bar" : "window-bar";
    var body = home ? "home-preview" : "preview-body";
    var title = lineBreaks(project.previewTitle || project.name);
    var imageText = escapeHTML(project.previewText || project.categoryLabel);
    var label = escapeHTML(project.previewLabel || project.type);
    var graphic = project.visual === "apparel" ? '<div class="preview-object apparel-object" aria-hidden="true"></div>' :
      project.visual === "food" ? '<div class="preview-object food-object" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' :
      '<div class="preview-object generic-object" aria-hidden="true">' + escapeHTML(project.name.slice(0, 2).toUpperCase()) + '</div>';
    var details = '<div class="preview-copy"><small>' + label + '</small><strong>' + title + '</strong><span>' + imageText + '</span></div>' + graphic;
    var counter = home ? "" : '<span class="art-index">' + escapeHTML(project.name) + '</span>';
    return '<div class="' + (home ? "home-project-art" : "project-art") + ' ' + escapeHTML(project.visual || "generic") + '" aria-hidden="true"><div class="' + frame + '"><div class="' + bar + '"><i></i><i></i><i></i><span>' + escapeHTML(project.name.toLowerCase()) + '</span></div><div class="' + body + '">' + details + '</div></div>' + counter + '</div>';
  }

  function homeCard(project) {
    var tags = project.technologies.slice(0, 3).map(function (item) { return "<span>" + escapeHTML(item) + "</span>"; }).join("");
    return '<article class="home-project art-' + escapeHTML(project.visual || "generic") + '">' + artwork(project, true) +
      '<div class="home-project-info"><span class="home-project-type">' + escapeHTML(project.type) + '</span><h3>' + escapeHTML(project.name) + '</h3><p>' + escapeHTML(project.description) + '</p><div class="home-project-bottom"><div class="home-project-tags">' + tags + '</div><a class="text-link" href="' + safeURL(project.demo) + '" target="_blank" rel="noopener">LIHAT DEMO ↗</a></div></div></article>';
  }

  function portfolioCard(project) {
    var tags = project.technologies.map(function (item) { return "<span>" + escapeHTML(item) + "</span>"; }).join("");
    return '<article class="project ' + escapeHTML(project.visual || "generic") + '" data-category="' + escapeHTML(project.category) + '">' + artwork(project, false) +
      '<div class="project-top"><span class="project-type">' + escapeHTML(project.type) + '</span><span class="status">' + escapeHTML(project.status || "Proyek") + '</span></div>' +
      '<h3>' + escapeHTML(project.name) + '</h3><p>' + escapeHTML(project.description) + '</p><div class="tags">' + tags + '</div><div class="project-links"><a class="button" href="' + safeURL(project.demo) + '" target="_blank" rel="noopener">Lihat demo ↗</a><a class="button outline" href="' + safeURL(project.repository) + '" target="_blank" rel="noopener">GitHub repo</a></div></article>';
  }

  var homeGrid = document.getElementById("home-projects");
  if (homeGrid) {
    homeGrid.innerHTML = projects.filter(function (project) { return project.featured; }).slice(0, 2).map(homeCard).join("");
  }

  var grid = document.getElementById("projects");
  if (!grid) return;
  grid.innerHTML = projects.map(portfolioCard).join("");

  var buttons = Array.prototype.slice.call(document.querySelectorAll(".filter"));
  var resultCount = document.getElementById("result-count");
  var empty = document.getElementById("empty");
  var total = projects.length;
  var liveCount = projects.filter(function (project) { return project.status === "Live"; }).length;
  var totalBadge = document.getElementById("total-count");
  var liveBadge = document.getElementById("live-count");
  var categoryBadge = document.getElementById("category-count");
  if (totalBadge) totalBadge.textContent = String(total).padStart(2, "0");
  if (liveBadge) liveBadge.textContent = String(liveCount).padStart(2, "0");
  if (categoryBadge) categoryBadge.textContent = String(new Set(projects.map(function (project) { return project.category; })).size).padStart(2, "0");

  buttons.forEach(function (button) {
    var category = button.dataset.filter;
    var badge = button.querySelector("small");
    if (badge) {
      var amount = category === "all" ? total : projects.filter(function (project) { return project.category === category; }).length;
      badge.textContent = String(amount).padStart(2, "0");
    }
    button.addEventListener("click", function () {
      var visible = 0;
      buttons.forEach(function (item) { item.setAttribute("aria-pressed", item === button ? "true" : "false"); });
      Array.prototype.forEach.call(grid.querySelectorAll(".project"), function (project) {
        var show = category === "all" || project.dataset.category === category;
        project.hidden = !show;
        if (show) visible++;
      });
      empty.classList.toggle("show", visible === 0);
      resultCount.textContent = "Menampilkan " + visible + " proyek";
    });
  });
})();
