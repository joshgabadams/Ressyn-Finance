const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/notify',(req,res)=>{

const email = req.body.email

fs.appendFileSync("emails.txt",email + "\n")

res.send({message:"saved"})

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})