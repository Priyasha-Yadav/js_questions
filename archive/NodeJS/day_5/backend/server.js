const express = require('express')
const app = express()
const tasksRouter = require('./routes/taskRouter.js');
const cors = require('cors');


app.use(cors());
app.use(express.json())
app.use('/', tasksRouter);


app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`)
})