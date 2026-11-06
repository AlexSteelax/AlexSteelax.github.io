"use strict";

var cp = require("child_process");
var fs = require("fs");
var path = require("path");

var ROOT = __dirname;
var WATCH_FILES = ["data.js", "build.js"];
var DEBOUNCE_MS = 120;

var timer = null;
var building = false;
var queued = false;

function build() {
  if (building) {
    queued = true;
    return;
  }
  building = true;
  var start = Date.now();
  console.log("[watch] building…");
  try {
    cp.execSync("node build.js", { cwd: ROOT, stdio: "inherit" });
    console.log("[watch] build ok in " + (Date.now() - start) + " ms");
  } catch (err) {
    console.error("[watch] build FAILED (fix error, file saved again)");
  } finally {
    building = false;
    if (queued) {
      queued = false;
      schedule();
    }
  }
}

function schedule() {
  clearTimeout(timer);
  timer = setTimeout(build, DEBOUNCE_MS);
}

WATCH_FILES.forEach(function (file) {
  var target = path.join(ROOT, file);
  if (!fs.existsSync(target)) {
    console.error("[watch] missing " + file);
    return;
  }
  fs.watch(target, { persistent: true }, function () {
    schedule();
  });
  console.log("[watch] watching " + file);
});

build();
console.log("[watch] ready. Ctrl+C to stop.");