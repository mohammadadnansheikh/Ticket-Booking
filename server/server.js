import express from 'express'
const app = express();
const PORT = 5000;
app.use('/home', (req, res)=>{
    res.send("Home")
})
app.listen(PORT, ()=>{
    console.log(`Successfully running on the PORT ${PORT}`)
})