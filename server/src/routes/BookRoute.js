import express from "express"

import { pool } from "../lib/db.js"

import { network } from "../utils/constants.js"

const BookRoute = express.Router()

BookRoute.get("/", (req, res) => {
    const q = "SELECT * FROM books"
    pool.query(q,(err, data) => {
        if (err) {
            console.error("DB ERROR:", err)
            return res.status(network.INTERNAL_SERVER_ERROR).json(err)
        } 
        return res.json(data)
    }) 
})

BookRoute.post("/", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`, `price`) VALUES (?)"
    
    const { title, description, cover, price } = req.body
   
    const values = [ title, description, cover, price ]
     
    pool.query(q, [ values ], (err, data) => {
        if (err) {
            console.error("DB ERROR:", err)
            return res.status(network.INTERNAL_SERVER_ERROR).json(err)
        } 
        return res.json("Book has been created successfully")
    })
    console.log("BODY:", req.body)
})

export default BookRoute