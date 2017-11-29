var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Goods = require('../models/goods');

// 链接mongo数据库
mongoose.connect('mongodb://127.0.0.1:27017/demo',{useMongoClient: true});
// 链接状态
mongoose.connection.on('connected', function(){
	console.log("MongoDB connected success.");
});

mongoose.connection.on('err', function(){
	console.log("MongoDB connected fail.");
});

mongoose.connection.on('disconnected', function(){
	console.log("MongoDB connected disconnected.");
});

// 接口
router.get('/', function(req,res,next){
	let page = parseInt(req.param("page"));
	let pageSize = parseInt(req.param("pageSize"));
	let priceLevel = req.param("priceLevel");
	let sort = req.param("sort");
	let skip = (page-1)*pageSize;
	let priceGt = '',priceLte = '';
	let params = {};
	if(priceLevel != 'all'){
		switch(priceLevel){
			case '0': priceGt = 0;priceLte=100;break;
			case '1': priceGt = 100;priceLte=500;break;
			case '2': priceGt = 500;priceLte=1000;break;
			case '3': priceGt = 1000;priceLte=5000;break;
		}
		params = {
			salePrice: {
				$gt: priceGt,
				$lte: priceLte
			}
		}
	}
	
	let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
	goodsModel.sort({'salePrice': sort});
	goodsModel.exec(function(err, doc){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			res.json({
				status: '0',
				msg: '',
				result: {
					count: doc.length,
					list: doc
				}
			})
		}
	})
});

//加入到购物车
router.post("/addCart", function(req,res,next){
	let userId = '100000077';
	var productId = req.body.productId;
	var User = require('../models/user');


	User.findOne({
		userId: userId
	}, function(err,userDoc){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			});
		}else{
			if(userDoc){
				let goodsItem = '';
				userDoc.cartList.forEach(function(item){
					if(item.productId == productId){
						goodsItem = item;
						item.productNum ++;
					}
				});
				if(goodsItem){
					userDoc.save(function(err1, doc1){
						if(err1){
							res.json({
								status: '1',
								msg: err.message
							});
						}else{
							res.json({
								status: '0',
								msg: '',
								result: 'suc'
							})
						}
					});
				}else{
					Goods.findOne({productId: productId}, function(err, doc){
						if(err){
							res.json({
								status: '1',
								msg: err.message
							});
						}else{
							if(doc){
								doc.productNum = 1;
								doc.checked = 1;
								userDoc.cartList.push(doc);
								userDoc.save(function(err1, doc1){
									if(err1){
										res.json({
											status: '1',
											msg: err.message
										});
									}else{
										res.json({
											status: '0',
											msg: '',
											result: 'suc'
										})
									}
								});
							}
						}
					})
				}
			}
		}
	})
});

module.exports = router;