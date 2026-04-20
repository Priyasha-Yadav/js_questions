// Imports
const express = require('express');
const fs = require('fs');

// Middleware
const app = express();

app.use(express.json());

const matcher = (isit, data) => {
    const users = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

    if (isit == 'signup') {
        for (let user of users) {
            if (user.email == data.email) {
                return false
            }
        }
        users.push(data);
        fs.writeFileSync('./db.json', JSON.stringify(users));
        return true;
    }

    else if(isit == 'login'){
        for (let user of users) {
            if (user.email == data.email) {
                if(user.password == data.password){
                    return true
                }
                else{
                    return false;
                }
            }
        }
        return false;
    }

}

// Endpoints 

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !name || !password) return res.status(400).json({ message: "All fields are required!" })

    return (matcher('signup', req.body)) ? res.status(201).json({ data: req.body, message: "User created successfully" }) : res.status(400).json({ message: "User already exists!" })


})
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "All fields are required!" })

    return (matcher('login', req.body)) ? res.status(200).json({ data: req.body, message: "Login successful!" }) : res.status(404).json({ message: "User not found or Password incorrect!" })

})

// Server

app.listen(8000, () => {
    console.log('http://localhost:8000');
})

