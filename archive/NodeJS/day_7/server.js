const express = require('express');
const fs = require('fs');
const postsRouter = require('./router/postRouter.js')
const app = express();
app.use(express.json());


const fetchData = async () => {
    const data = JSON.parse(fs.readFileSync('./config/db.json', 'utf-8'));

    if (data.length === 0) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        fs.writeFileSync('./config/db.json', JSON.stringify(result, null, 2));
        console.log('DB initialized');
    }
};

fetchData();

app.use('/', postsRouter);






app.listen(8000, () => {
    console.log('Server is running at http://localhost/8000');
})