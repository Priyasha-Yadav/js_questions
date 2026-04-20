const fs = require('fs');
const path = require('path');

const productPath = path.join(__dirname, '../models/product.json')

const getAllProducts = (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
        return res.status(200).json({ message: "Products Fetched Successfully!", data });

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

const getProductById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
        const product = data.find(p => p.id === id);
        if (!product) return res.status(404).json({ message: "Product not found!" })
        return res.status(200).json({ message: "Products Fetched Successfully!", product });
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

const addProduct = (req, res) => {
    try {
        const { name, price, company } = req.body;
        if (!name || !price || !company) return res.status(400).json({ message: "All fields are required!" });
        const data = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
        data.push({ id: Date.now(), productName: name, productPrice: price, productcompany: company });
        fs.writeFileSync(productPath, JSON.stringify(data, null, 2));
        return res.status(201).json({ message: "Product added Successfully!" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

const updateProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, price, company } = req.body;
        if (!name || !price || !company) return res.status(400).json({ message: "All fields are required!" });
        const data = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
        const product = data.find(p => p.id === id);
        if (!product) return res.status(404).json({ message: "Product not found!" })
        product.name = name;
        product.price = price;
        product.company = company;
        fs.writeFileSync(productPath, JSON.stringify(data, null, 2));

        return res.status(200).json({ message: "Product updated Successfully!" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

const deleteProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        const data = JSON.parse(fs.readFileSync(productPath, 'utf-8'));
        const newData = data.filter(p => p.id !== id);
        fs.writeFileSync(productPath, JSON.stringify(newData, null, 2));
        return res.status(200).json({ message: "Product removed successfully!" });

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

module.exports = { getAllProducts, getProductById, deleteProduct, addProduct, updateProduct }