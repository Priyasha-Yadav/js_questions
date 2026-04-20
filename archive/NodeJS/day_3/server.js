const express = require('express');
const app = express();
const fs = require('fs')


app.use(express.json());


app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
    res.status(200).json(data);
})

app.post('/post', (req, res) => {

    const newData = req.body;
    const { id, name, rollno } = newData;
    console.log(newData)
    if (!id || !name || !rollno) {
        return res.status(400).json({ message: "All fields are required!" })
    }

    const prevData = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    prevData.push(newData);
    fs.writeFileSync('./db.json', JSON.stringify(prevData));
    res.status(201).json(newData)
})


app.listen(8000, () => {
    console.log(`Server is alive! at http://localhost:${8000}`)
})



