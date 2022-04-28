const express = require('express');
// const path = require('path');
const connection = require('./connection');
const cors = require('cors')
const app = express(),
bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
app.use(cors);
// app.use(cors({
//   origin: '*'
// }));

const router = require('./routes/user')
const empRouter = require('./routes/emp')

// place holder for the data
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, './build/')));
// app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, './build/index.html')); });

app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});

// //Route
app.get('/',function(req,res){
  res.send('hello world')
})

app.use('/user',router)
app.use('/emp',empRouter)

