var express = require('express')
var router = express.Router()
var moongoose = require('mongoose')
moongoose.connect('mongodb://localhost/ecommerce')

var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

var User = require('../models/user')

//INDEX
router.get('/', function(req, res){
  console.log('hello')
    
  })


// //CREATE
// router.post('/', function(req, res){
//   console.log('Data being posted to /products')
//   var data = req.body;
//   var newProduct = new Product({
//     name: data.name,
//     price: data.price,
//     description: data.description
//   })

//   newProduct.save(function (err, product) {
//     if(err) console.log(err);
//     console.log('Product has been created!');
//     res.json(product);
//   });
// })

module.exports = router
