const getRoot = require("app-root-path").path;
const hbs = require("hbs");
module.exports = (app) => {
  hbs.registerPartials(`${getRoot}/views`, (err) => {});

  app.set("views", `${getRoot}/views`);
  app.set("view engine", "hbs");

  return;
};
