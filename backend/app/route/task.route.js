module.exports = (app) => {
	const task = require('../controller/task.controller');

    // Получение всех задач в списке
    app.get('/api/tasks', task.findAll);

	// Получение задачи по id
	app.get('/api/tasks/:id', task.findById);

	// Добавление задачи
	app.post('/api/tasks', task.create);

	// Удаление задачи по id
	app.delete('/api/tasks/:id', task.delete);

	// Обновление задачи по id
	app.put('/api/tasks/:id', task.update);
}