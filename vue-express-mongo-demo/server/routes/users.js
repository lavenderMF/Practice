var express = require('express');
var router = express.Router();
var User = require('./../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 登录
router.post('/login', function(req,res,next){
	let param = {
		userName: req.body.userName,
		userPwd: req.body.userPwd
	};
	User.findOne(param, function(err, doc){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			if(doc){
				res.cookie('userId',doc.userId,{
					path: '/',
					maxAge: 1000*60*60
				});
				res.cookie('userName',doc.userName,{
					path: '/',
					maxAge: 1000*60*60
				});
				// req.session.user = doc;
				res.json({
					status: '0',
					msg: '',
					result: {
						userName: doc.userName
					}
				})
			}else{
				res.json({
					status: '1',
					msg: '登录出错'
				})
			}
		}
	})
});

// 登出
router.post('/logout', function(req,res,next){
	res.cookie('userId', '',{
		path: '/',
		maxAge: -1
	})
	res.json({
		status: '0',
		msg: '',
		result: ''
	})
})

//
router.get('/checkLogin', function(req,res,next){
	if(req.cookies.userId){
		res.json({
			status: '0',
			msg: '',
			result: req.cookies.userName || ''
		})
	}else{
		res.json({
			status: '1',
			msg: '未登录',
			result: ''
		})
	}
});

// 当前用户的购物车数据
router.get('/cartList', function(req,res,next){
	var userId = req.cookies.userId;
	User.findOne({userId:userId}, function(err, doc){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			if(doc){
				res.json({
					status: '0',
					msg: '',
					result: doc.cartList
				})
			}
		}
	})
})

// 删除购物车
router.post('/cartDel', function(req, res, next){
	var userId = req.cookies.userId;
	var productId = req.body.productId;
	User.update({userId:userId},{$pull:{'cartList':{'productId': productId}}},function(err,doc){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			res.json({
				status: '0',
				msg: '',
				result: 'suc'
			})
		}
	});
})

// 修改商品数量
router.post('/cartEdit', function(req, res, next){
	var userId = req.cookies.userId,
		productId = req.body.productId,
		productNum = req.body.productNum;
		checked = req.body.checked;
	User.update({"userId": userId,"cartList.productId":productId},{"cartList.$.productNum": productNum,"cartList.$.checked": checked},function(err,doc){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			res.json({
				status: '0',
				msg: '',
				result: 'suc'
			})
		}
	})
})

router.post('/editCheckAll',function(req,res,next){
	var userId = req.cookies.userId,
		checkAll = req.body.checkAll;
	User.findOne({userId:userId}, function(err,user){
		if(err){
			res.json({
				status: '1',
				msg: err.message
			})
		}else{
			if(user){
				user.cartList.forEach((item)=>{
					item.checked = checkAll;
				})
				user.save(function(err1,doc){
					if(err1){
						res.json({
							status: '1',
							msg: err.message,
							result: ''
						})
					}else{
						res.json({
							status: '0',
							msg: '',
							result: 'suc'
						})
					}
				})
			}
		}
	})
});

router.get('/addressList', (req, res, next) => {
	var userId = req.cookies.userId;

	User.findOne({userId}, (err, doc) => {
		if (err) {
		  res.json({
		    status: '1',
		    msg: err.message,
		    result: ''
		  })
		} else {
		  res.json({
		    status: '0',
		    msg: '',
		    result: doc.addressList
		  })
		}
	})
});

router.post('/setDefault', function(req,res,next){
	var userId = req.cookies.userId;
	var addressId = req.body.addressId;

	if(!addressId){
		res.json({
			status: '1003',
			msg: 'addressId is null',
			result: ''
	    })
	}else{
		User.findOne({userId}, (err, doc) => {
			if (err) {
				res.json({
					status: '1',
					msg: err.message,
					result: ''
				})
			} else {
				var addressList = doc.addressList;
				addressList.forEach(item => {
					if (item.addressId == addressId) {
				  		item.isDefault = true;
					} else {
				  		item.isDefault = false;
					} 
				}); 

				doc.save((err1, doc1) => {
					if (err1) {
						res.json({
							status: '1',
							msg: err.message,
							result: ''
						})
					} else {
						res.json({
							status: '0',
							msg: '',
							result: ''
						})
					}
				})
			}
	    })
	}
	
})

router.post('/delAddress', function(req,res,next){
	var userId = req.cookies.userId;
	var addressId = req.body.addressId;
	User.update({userId}, {
	    $pull: {
	    	'addressList': {
	    		'addressId': addressId
	    	}
	    }
	}, (err, doc) => {
	    if (err) {
	    	res.json({
	    		status: '1',
	        	msg: err.message
	    	});
	    } else {
	    	res.json({
	        	status: '0',
	        	msg: ''
	    	});
	    }
	})
})
module.exports = router;
