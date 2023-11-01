	
const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
var md5 = require('md5');
var bodyParser = require('body-parser')
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:false})) 
app.use(bodyParser.json()) 

const cars = [
    {   company: 'BMW', 
        model:'X5', 
        id: 1
    },
    {
        company: 'Audi',
        model:'Q3', 
        id: 2
    },
    {  
        company: 'Mercedes',
        model:'4Matic', 
        id: 3
    },
    {  
        company: 'Lamborghini',
        model:'Hurracan', 
        id: 4
    },
    {  
        company: 'Hyundai',model:'Verna', id: 5},
    {
        company: 'Aston Martin',
        model:'DBS Superleggera', 
        id: 6
    },
    {
        company: 'Bentley',
        model:'Mulsanne', 
        id: 7
    },
    {
        company: 'Ferrari',
        model:'488', 
        id: 8
    },
    {
        company: 'Pagani',
        model:'huayra', 
        id: 9
    },
    {
        company: 'Buggati',
        model:'Chiron', 
        id: 10
    },
]
 

app.get('/cars', (req,res)=> {
res.send(cars);
});
 
app.get('/cars/postval', (req,res)=> {
  res.render("postval.ejs");
  });

app.get('/cars/:id', (req, res) => {
const car = cars.find(c => c.id === parseInt(req.params.id));
 
if (!car) res.status(404).send('<h2 style="color: black;">Car not found! Please Try another id</h2>');
res.send(car);
});

app.post('/cars',verifyToken, (req, res)=> {
    jwt.verify(req.query.token, 'secretkey', (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            const car = {
                id: cars.length + 1,
                company: req.body.company,
                model: req.body.model
                };
                cars.push(car);
                res.send(cars);
        //   res.json({
        //     message: 'Post created...',
        //     authData
        //   });
        }
      });
 


});

var uid = 100

app.post('/cars/login',  (req, res) => {
    
    const user = {
      uid: uid + 1, 
      username: req.body.uname,
      email: req.body.email,
      password : req.body.password,
    }
    console.log(req.body)
    console.log("Hello")
    jwt.sign({user}, 'secretkey', (err, token) => {
      // res.json({
      //   token
      // });
      console.log(token)
      res.render("postval",{token:token})
    });
});
  

app.put('/cars/:id', (req, res) => {
const car = cars.find(c=> c.id === parseInt(req.params.id));
if (!car) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Car Not Found</h2>');
 
 
car.company = req.body.company;
car.model = req.body.model;
res.send(car);
});
 
app.delete('/cars/:id', (req, res) => {
 
const car = cars.find( c=> c.id === parseInt(req.params.id));
if(!car) res.status(404).send('<h2 style="color: darkred;"> Not Found!! </h2>');
 
const index = cars.indexOf(car);
cars.splice(index,1);
 
res.send(car);
});


// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.query.token;
    console.log(bearerHeader)
    // const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(bearerHeader !== '') {
      console.log("hello")
      // Split at the space
      // const bearer = bearerHeader.split(' ');
      // // Get token from array
      // const bearerToken = bearer[1];
      // // Set the token
      // req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }

  
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));