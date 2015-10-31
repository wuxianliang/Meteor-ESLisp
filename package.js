Package.describe({
  name: 'wuxianliang:eslisp-compiler',
  summary: "ESLisp, a lisp way to code JavaScript.",
  version: "0.0.2",
  git: "https://github.com/wuxianliang/Meteor-ESLisp.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileESLisp",
  use: [],
  sources: [
    'plugin/compileESLisp.js'
  ],
  npmDependencies: {
    "eslisp": "0.6.2"
  }
});

Package.on_use(function(api, where) {
  api.export("prelude");
  api.add_files("prelude-browser-min.js", ["server", "client"]);
  api.add_files("requirePrelude.js", ["server", "client"]);
});
