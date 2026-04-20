
const fs = require('fs')

const getTasks = (req, res) => {
    const tasks = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    return res.status(200).json({ message: "Tasks fetched successfully", tasks });
}

const addTask = (req, res) => {
    const tasks = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const { startDate, endDate, title, description } = req.body;
    if (!startDate || !endDate || !title) {
        return res.status(401).json({ message: "All fields are required" });
    }
    const id = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    tasks.push({ id: id, ...req.body, status: 'not-started' });
    fs.writeFileSync('./db.json', JSON.stringify(tasks, null, 2));
    return res.status(201).json({ message: "Task added successfully" });

}

const updateTask = (req, res) => {
    const id = Number(req.params.id);
    const { startDate, endDate, title, description, status } = req.body;
    const tasks = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const updateTask = tasks.find(tId => tId.id == id);
    if (startDate) updateTask.startDate = startDate;
    if (endDate) updateTask.startDate = endDate;
    if (title) updateTask.title = title;
    if (description) updateTask.description = description;
    if (status) updateTask.status = status;
    fs.writeFileSync('./db.json', JSON.stringify(tasks, null, 2));
    return res.status(200).json({ message: "Task updated successfully! " });

}

const deleteTask = (req, res) => {
    const tasks = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const id = Number(req.params.id);
    const newtasks = tasks.filter(tId => tId.id !== id);
    fs.writeFileSync('./db.json', JSON.stringify(newtasks, null, 2));
    return res.status(200).json({ message: "Task deleted successfully" });

}

module.exports = { addTask, updateTask, deleteTask, getTasks }