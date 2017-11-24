var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"productId": String,
	"produceName": String,
	"salePrice": Number,
	"productImage": String
});

module.exports = mongoose.model('Goods',productSchema);