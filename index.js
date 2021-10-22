const express = require('express');
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/',(req, res)=>{
    res.send('hello from second node  is module 64')
})
const users2 = [
    {id:'0',name:'Sradha', email:'sradha@gmail.com', phone:'017888878778'},
    {id:'1',name:'Alia', email:'alia@gmail.com', phone:'017888878778'},
    {id:'2',name:'Disha', email:'disha@gmail.com', phone:'017888878778'},
    {id:'3',name:'Owisohrya', email:'owishorya@gmail.com', phone:'017888878778'},
    {id:'4',name:'rashmika', email:'rashmika@gmail.com', phone:'017888878778'}
]
app.get('/users',(req, res)=>{
    res.send('Here is Your users')
})


app.get('/users2', (req, res)=>{
    const search = (req.query.search);
    if(search){
        const searchResult = users2.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{

        res.send(users2)
    }
})

app.post('/users2',(req, res)=>{
    const newUser = ( req.body);
    newUser.id = users2.length
    users2.push(newUser)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/fruits', (req,res)=>{
    res.send('dslfjsldfjl')
})
app.get('/fruits/mango/nagra/', (req,res)=>{
    res.send('Yummy yummmy mangoses')
})

app.get('/users2/:id',(req, res)=>{
    const id = req.params.id
    const user = users2[id]
    res.send(user)
    // console.log(req.params.id);
})

app.get('/details', (req, res)=>{
    res.send({id:2, name:'saikat', fullName:'Reza Md: Saikat Somir Bin Monir', email: 'saikatsomir@gmail.com'})
})
app.listen(port, ()=>{
    console.log('Listening from node js second module part', port);
})