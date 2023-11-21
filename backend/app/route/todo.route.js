module.exports = (app) => {
	const todo = require('../controller/todo.controller');

	// Получение всех списков дел
	app.get('/api/todos', todo.findAll);

	// Получение списка дел по id
	app.get('/api/todos/:id', todo.findById);

	// Добавление списка дел
	app.post('/api/todos', todo.create);

	// Удаление списка дел по id
	app.delete('/api/todos/:id', todo.delete);
}