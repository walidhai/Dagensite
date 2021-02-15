const { v4: uuidv4 } = require('uuid');

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
const products = require('./db');



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

http.createServer(app).listen(3001, () => {
  console.log('Listen on 0.0.0.0:3001');
});

app.get('/', (_, res) => {
  res.send({ status: 200 });
});

/**
 * generates unique id based on idv4
 */
function generate_uuid() {
  const { v4: uuidv4} = require('uuid');

  return uuidv4();
}

/**
 * post method to push into array db
 * 
 */
app.post('/products', (req, res)=>{
  let {name, price, category} = req.body;
  console.log(req);
  let id = generate_uuid();
  console.log(id);
  
  if(!name && !price && !category) return res.status(400).json("Please fill the blanks");
  if(!name) return res.status(400).json("Foodname cant be blank");
  if(!price) return res.status(400).json("Price cant be blank");
  if(!category) return res.status(400).json("Category cant be blank");

  var data={name:name,
            id:id,
            category:category,
            price:price,
            };

  products.push(data);
  
  console.log(data);

  return res.status(200).json(data);

})

process.on('SIGINT', function () {
  process.exit();
});
