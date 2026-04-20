
const fs = require('fs')

const addMovies = (req, res) => {

    try {
        const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));
        const { title, year } = req.body;
        if (!title || !year) return res.status(400).json({ message: "All fields are required" });
        if (typeof title !== 'string' || typeof year !== 'number') return res.status(400).json({ message: "Title should be string and year must be number" });
        const newMovie = { id: Date.now(), title, year };
        movies.push(newMovie);
        fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));

        res.status(201).json({ message: "Movie added successfully" });
    }
    catch (error) {
        return res.status(500).json.message("Internal server error!")
    }



}

const getMovies = (req, res) => {
    try {
        const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));
        return res.status(200).json({ message: "Movies fetched successfully", movies });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error!", error })

    }
}

module.exports = { addMovies, getMovies };