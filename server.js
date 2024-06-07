const express = require('express')
const app = express();


app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended:false}))

const users =[];

app.get('/', (req, res)=>{
    res.render('index.ejs', {name: "Elyor"})
} )

app.get('/login', (req, res)=>{
    res.render('login.ejs')
} )

app.get('/register', (req, res)=>{
    res.render('register.ejs')
} )

app.post('/register', (req, res)=>{
    const data = {
        name: req.body.name,
        password: req.body.password
    }
    users.push(data);
    console.log(users)
})

app.listen(5000)