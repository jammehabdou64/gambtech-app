const { Route, getController, checkAuth, isLogIn } = require("gambtech-lib");
const AuthController = getController("AuthController");
/**
 *
 * Web Routes
 */

Route.get("/", (req, res) => res.render("welcome"));
Route.get("/register", isLogIn, (req, res) => res.render("auth/register"));
Route.get("/login", isLogIn, (req, res) => res.render("auth/login"));

Route.post("/auth/register", AuthController.register);
Route.post("/auth/login", AuthController.login);

Route.get("/home", checkAuth, AuthController.home);
