const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


require('dotenv').config();
const app = express();

// middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// get route
app.get('/', (req,res)=>{
    res.send("Server Ok");
})


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log('Server Started at: http://localhost:'+ port);
})