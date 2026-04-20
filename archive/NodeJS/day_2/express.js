const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { // route path
    const movie = JSON.parse(fs.readFileSync('movies.json', 'utf8'));
    res.json(movie)
})

// app.post('/post', (req, res) => {
//     res.status(200);
//     res.json('Post is working...');
// })

app.post('/post', (req, res) => {
    const newMovie = req.body;
    const movie = JSON.parse(fs.readFileSync('./movies.json'));
    movie.push(newMovie);
    fs.writeFileSync('movies.json', JSON.stringify(movie));
    res.status(201).json({ message: "Success" })

})


app.put('/put/:id', (req, res) => {
    const { id, title, year } = req.body
    const data = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));
    const movieId = Number(req.params.id);
    const findMovie = data.find(movie => movie.id === movieId);

    if (!findMovie) {
        return res.status(404).json({ message: "Movie not found..." })
    }
    // data[findMovie] = {...data[findMovie], ...req.body};
    findMovie.title = title;
    findMovie.year = year;

    fs.writeFileSync("./movies.json", JSON.stringify(data));

    res.status(200).json({ message: "Movie updated successfully..." });

})

app.patch('/patch/:id', (req, res) => { 
    const id = Number(req.params.id);

})

app.delete('/delete/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./movies.json', 'utf8'));
    const movieId = Number(req.params.id);
    const allMovies = data.filter(mId => mId.id != movieId);
    fs.writeFileSync('./movies.json', JSON.stringify(allMovies, null, 2));
    res.status(200).json({ message: "Movie Deleted Successfully!" })


})

app.listen(1000 * 8, () => {
    console.log(`Server is running`)
})



