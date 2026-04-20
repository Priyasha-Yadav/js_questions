const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../config/db.json');

const getPosts = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        return res.status(200).json({ message: "Data Fetched Successfully", data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const addPost = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        const { userId, title, body } = req.body;

        if (!userId || !title || !body) {
            return res.status(400).json({ message: "All fields required!" });
        }

        const newPost = {
            id: Date.now(),
            userId,
            title,
            body
        };

        data.push(newPost);
        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

        return res.status(201).json({
            message: "Post added successfully",
            data: newPost
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const updatePost = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        const Nid = Number(req.params.id);
        const { userId, title, body } = req.body;

        if (!userId || !title || !body) {
            return res.status(400).json({ message: "All fields required!" });
        }

        const updateData = data.find(post => post.id === Nid);
        if (!updateData) {
            return res.status(404).json({ message: "Post not found" });
        }

        updateData.title = title;
        updateData.body = body;
        updateData.userId = userId;

        fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
        return res.status(200).json({ message: "Post Updated Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deletePost = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
        const id = Number(req.params.id);

        const newData = data.filter(post => post.id !== id);
        if (newData.length === data.length) {
            return res.status(404).json({ message: "Post not found" });
        }

        fs.writeFileSync(dbPath, JSON.stringify(newData, null, 2));
        return res.status(200).json({ message: "Post Deleted Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getPosts, addPost, updatePost, deletePost };
