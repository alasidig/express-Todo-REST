const Sqlite = require('better-sqlite3');
const db = new Sqlite('tasks_store.db', {fileMustExist: true});
const getObjectOr404 = (req, res, next) => {
    const id = parseInt(req.params.id)
    const task = db.prepare('SELECT * FROM tasks where id=?').get(id)
    if (!task) {
        res.status(404).send()
        return
    }
    req.index = task
    next()
}
const getTasks = (req, res) => res.json(db.prepare('SELECT * from tasks').all())
const getTaskById = (req, res) => {
    res.json(req.index)
}
const addTask = (req, res) => {
    const info = db.prepare("Insert into tasks('title') values (?)").run(req.body.title)
    res.status(201).json(info)
}
const updateTask = (req, res) => {
    req.index.title = req.body.title
    db.prepare('UPDATE tasks set title = ? where id = ?').run([req.body.title, req.params.id])
    res.json(db.prepare('select * from tasks where id=?').get(req.params.id))

}
const deleteTask = (req, res) => {
    db.prepare("delete from tasks where id=?").run(req.params.id)
    res.status(204).send()
}
module.exports = {
    getTaskById,
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    getObjectOr404,
}




