// app.js

const express = require("express"); /*express = Uncaught reference error - Needs to be fixed. This has to run in node. javascript does not understand */
const bodyParser = require("body-parser");
const taskController = require("./controller/TaskController");
const WSJFController = require("./controller/WSJFController");

// db instance connection
require ("./config/db.js");
const port = 3308;

//invoke express app from the above require statement for express
const app = express();

// const port = process.env.PORT || 3304,
mongoose = require ("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:3308/test");
/*
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//bodyParser is not defined: I NEED TO FIX THAT
*/

// API ENDPOINTS

app
  .route("/tasks")
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);
/* I NEED TO FINISH THIS. I CREATED A FILE CALLED WSJFitem.js in the model folder to define the model and pass the form data in the mongodb. The model route is defined in the html file in the form as action attribute
  */
app.post('/', (req, res) => res.send('Item successfully created'))
    .route("/post_WSJF_item")
    .get(WSJFController.listAllWSJFtems)
    .post(WSJFController.createWSJFItem);
    /*
    .post(WSJFController.createWSJFitem)
    .delete(WSJFController.deleteWSJFitem); */

app
  .route("/post_WSJF_item/:WSJF_item_id")

//app.get('/', (req, res) => res.send('Hello World!')) //this is leading to the result of having hello world printed on the localhost

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
