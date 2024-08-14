/*  entry point for the backend of our app 
    where we setup our express server, server code & run it
*/

import express from 'express';
import { cartItems as cartItemsRaw, products as productsRaw } from '../temp-data';

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();
app.use(express.json());

// listen on port 8000
app.listen(8000, () => {
  console.log('Server is listening on port 8000')
})

// respond to our requests by executing logic specified
app.get('/hello', (req, res) => {
  res.send('Hello Akshaya!')
})

// main get requests:
app.get('/products', (req, res) => {
  res.json(products);
})
app.get('/cart', (req, res) => {
  const populatedCart = populatedCartIds(cartItems);
  res.json(populatedCart);
})
app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find(product => product.id === productId);
  res.json(product);
})

function populatedCartIds(ids){
  return ids.map(id => products.find(product => product.id === id))
}

// additional requests:
app.post('/cart', (req, res) => {
  /*
    previously:
    get the data from the body inside the incoming request
    use this data to search for the product in the products list
    get the product that matches with the data from the body
    push this product into the existing cart list

    const productId = req.body.id
    const product = products.find(product => product.id === productId);
    cartItems.push(product);
    res.json(cartItems);
  */
  const productId = req.body.id
  cartItems.push(productId);
  const populatedCart = populatedCartIds(cartItems);
  res.json(populatedCart);
})

app.delete('/cart/:productId', (req, res) => {
  const productId = req.params.productId;
  cartItems = cartItems.filter(id => id !== productId);
  const populatedCart = populatedCartIds(cartItems);
  res.json(populatedCart);
})