
var rule = require('simple_rule.json');
var Validator = require('../');

var validator = Validator.createValidator();

var formData = [
	"billInvoiceTitle" : "test1",
	"billOfLading" : "true",
	"emptyOne" : "",
	"emptyTwo" : "",
	"donkey" : "test"
]
//formData(formData)
var validateResult = validator.validate(formData)
	//simple_result.json = validateResult
	/*
{
	"billInvoiceTitle": "",
	"billOfLading": "",
	"donkey": "@english",
	"emptyOne": "",
	"emptyTwo": "@required"
	}
	*/