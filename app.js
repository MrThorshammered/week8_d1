var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ecommerce')
express = require('express')
var router = express.Router();



var User = require('./models/user')
var Product = require('./models/product')
var Order = require('./models/order')

var userRoute = require('./controllers/user-controller');
app.use('/users', userRoute);

app.get('/', function(req, res){
  res.render('index')
})

// var james = new User({
// 	name: 'James White',
// 	gender: 'male',
// 	dob: 04/05/1986
// })

// james.save(function(err, user){
// 	if (err) console.log(err)
//   console.log('James saved!!');
// })

// var thong = new Product({
// 	name: 'Banana Hammok pro',
// 	price: 25.99,
// 	description: 'the ultimate in luxury banana hammocks. made from the finest silks'
// })

// thong.save(function(err, product){
// 	if (err) console.log(err)
//   console.log('Thong saved!!');
// })


// var jamesorder = new Order({
// 	price: 25.99,  //hardcoded needs updating after working to be soft
// 	createdAt: Date(),
// 	address: {
// 		street: 'blah',
// 		postcode: 'tw11 4lj',
// 		town: 'london',
// 		country: 'england'
// 	  },
// 	  products: thong,
// 	  user: james
// })

// jamesorder.save(function(err, order){
// 	if (err) console.log(err)
//   console.log('order saved!!');
// })