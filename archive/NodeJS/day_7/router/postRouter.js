const express = require('express');
const router = express.Router();
const{ getPosts, addPost, updatePost, deletePost} = require('../controller/postController.js')

router.get('/get-posts', getPosts);
router.post('/add-post', addPost);
router.put('/update-post/:id', updatePost);
router.delete('/delete-post/:id', deletePost);

module.exports = router;
