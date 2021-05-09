const express = require('express')
const hbs = require('hbs')
const app = express()

const port = process.env.PORT || 3000

app.get('',(req,res) =>{
    res.render('mainPage.hbs')
})


app.listen(port, () => {
    console.log('server is ap on port ' + port)
})