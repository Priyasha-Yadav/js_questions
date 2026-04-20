const express = require('express')
const app = express()
const connectDB = require('./config/db')
const User = require('./models/User');
const Author = require('./models/AuthorProfile');

app.use(express.json());

connectDB();

app.post('/users', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        return res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
})

app.post('/authors', async (req, res) => {
    try {
        const { userId, age, address, mobile, noOfBooksPublished } = req.body;
        const author = await Author.create({
            user: userId,
            age,
            address,
            mobile,
            noOfBooksPublished
        });
        return res.status(201).json(author);

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
})

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`)
})
