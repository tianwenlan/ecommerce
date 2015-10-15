var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
	var myProducts = [];

	myProducts = appdata.populars;

  	res.render('index', { 
  		title: 'Homepage',
  		products: myProducts 
  	});
});

/* GET admin page. */
router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Adminpage' });
});

/* GET indivisual page. */
router.get('/:productid', function(req, res) {
	var myProducts = [];

	appdata.sales.forEach(function(item){
		if(item.productID == req.params.productid){
			myProducts.push(item);
		}
	});

	appdata.populars.forEach(function(item){
		if(item.productID == req.params.productid){
			myProducts.push(item);
		}
	});

    res.render('indivisual', { 
    	title: 'indivisual',
    	products: myProducts  
    });
});



module.exports = router;
