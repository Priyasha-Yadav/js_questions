const express = require('express')
const app = express()
// const authRouter = require('./routes/authRoutes.js');
// const productRouter = require('./routes/productRoutes.js')
const connectDB = require('./config/db.js')
app.use(express.json())
const Movie = require('./models/movies.js')

// app.use('/user', authRouter);
// app.use('/products', productRouter);

app.get('/', async (req, res) => {
    try {
        const data = await Movie.find();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.post('/', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        return res.status(201).json(newMovie);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.put('/:id', async (req, res) => {
    try {
        await Movie.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({ message: "User updated successfully!" });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.delete('/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Movie deleted successfully!" });

})


app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`)
    connectDB();
})
