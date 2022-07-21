module.exports = (app) => {
	app.get('/', (req, res) => {
		app.app.controllers.index.home(app, req, res);
	});

	app.post('/usuario/login', (req, res) => {
		app.app.controllers.index.login_usuario(app, req, res);
	});
}