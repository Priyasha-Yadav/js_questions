const fs = require('fs');
const path = require('path');

const userPath = path.join(__dirname, '../models/user.json');

const login = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "All fields required!" });
        const user = data.find(u => u.email === email && u.password === password);
        if (!user) return res.status(404).json({ message: "User not found!" });
        return res.status(200).json({ message: "Login successful!" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

const signup = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
        const { name, email, password } = req.body;
        if (!email || !password || !name) return res.status(400).json({ message: "All fields required!" });
        const user = data.find(u => u.email === email);
        if (user) return res.status(400).json({ message: "User already exist!" });
        data.push({ id: Date.now(), ...req.body });
        fs.writeFileSync(userPath, JSON.stringify(data, null, 2));
        return res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

const forgotPassword = (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(404).json({ message: "Email required!" });
        const data = JSON.parse(fs.readFileSync(userPath, 'utf-8'));
        const user = data.find(u => u.email === email);
        if (!user) return res.status(404).json({ message: "Email doesn't exist!" });

        const newPassword = req.body.newPassword;
        user.password = newPassword;
        fs.writeFileSync(userPath, JSON.stringify(data, null, 2));
        return res.status(200).json({ message: "Password updated successfully" });

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

module.exports = { login, signup, forgotPassword }