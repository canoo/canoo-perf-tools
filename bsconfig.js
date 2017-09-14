// config file for browser-sync.

module.exports = {
  port: 8080,
  ui: false,
  notify: false,
  files: "**/*.html",
  server: {
    baseDir: [".", "bower_components"]
  },
  startPath: "test/index.html"
}
