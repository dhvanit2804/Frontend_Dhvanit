import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

const port = process.env.PORT || 3000

// Database Connection Code
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("Connected to MongoDB")
}).catch((error)=>{
  console.log("Error Connecting to MongoDB:", error)
})

app.get('/', (req, res) => {
  res.send('Hello My Name is Dhvanit!')
})

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`)
})
