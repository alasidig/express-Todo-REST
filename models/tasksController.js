const tasks = [
    {
        id: 1,
        title: "Study"
    },
    {
        id: 2,
        title: "Sleep"
    },
    {
        id: 3,
        title: "Pray"
    },

]
const getObjectOr404 = (req, res, next) => {
    const id = parseInt(req.params.id)
    const task = tasks.findIndex((t) => t.id === id)
    if (task === -1) {
        res.status(404).send()
        return
    }
    req.index = task
    next()
}
const getTasks = (req, res) => res.send(JSON.stringify(tasks))
const getTaskById = (req, res) => {
    res.send(JSON.stringify(tasks[req.index]))
}
const addTask = (req, res) => {
    const id = tasks.length + 1
    tasks.push({
        id: id,
        title: req.body.title
    })
    res.status(201).send(JSON.stringify({lastId: id}))
}
const updateTask = (req, res) => {
    tasks[req.index].title = req.body.title
    res.send(JSON.stringify(tasks[req.index]))

}
const deleteTask = (req, res) => {
    tasks.splice(req.index, 1)
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