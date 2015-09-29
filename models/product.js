var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
	name: {type: String, required: true },
	price: Number,
	description: String
	
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product
