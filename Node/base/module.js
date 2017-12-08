

const square = require('./module_square');

exports.test = function (req,res) {

	// console.log(square(2));
 
 	console.log("正方形的面积是"+square.test(4));
 	

	res.send("start module !!!");
}


