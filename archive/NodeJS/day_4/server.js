const express = require('express')
const app = express()
const movieRoute = require('./routes/movies.js')

app.use(express.json())
app.use('/', movieRoute)


app.listen(8000, () => {
    console.log(`Server is running`)
})