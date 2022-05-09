# express-Todo-REST
Minimal REST API to manage ToDos

# How to run
- run `node index.js`
- open a browser on http://127.0.0.1:3000
- Install restClient VS Code Extention.
- run the requests in `testApi.rest` 
# Brief Explaination
## index.js
- It creates an express app and configure it to accept and send JSON data. 
- The main `/` route accept get - to send the list of tasks- and post - to create a new task-
- The /:id route accepts get -to send the details of the task- put to update it-, and delete the task with the given id
- toggle between in-memory and database storage of the tasks by commenting/uncommenting line 4/5 
## models/tasksController.js and models/tasksDbController.js 
Defines a middleware `getObjectOr404` to get a task with the given id or send 404 not-found if there is no task with the given id. And defines methods:
- `getTaskById` to send the details of a task with the given ID,
- `getTasks` to send a list of all tasks,
- `addTask` to create a new task and add it to the list,
- `updateTask` to modify a task with the given ID,
- `deleteTask` to Delete a task with the given ID,
to the button for the done tasks.

  **You may replace the `res.send(JSON.stringify(tasks)` by `res.json(tasks)`**