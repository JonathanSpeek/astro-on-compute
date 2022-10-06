module.exports = {
  publicDir: "../dist",
  excludeDirs: [ './node_modules' ],
  includeDirs: [ './.well-known' ],
  staticDirs: [],
  spa: false,
  notFoundPage: "/404.html",
  autoIndex: ["index.html","index.htm"],
  autoExt: [".html",".htm"],
};