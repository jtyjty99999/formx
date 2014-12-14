
var rule = require('complex_rule.json');
var data = require('complex_data.json');
var Validator = require('../');

var FormxValidator = Validator.FormxValidator;

var result = FormxValidator.doValidate(data,rule);

console.log(result.getValidateMessage());
console.log(result.getValidateFailMessage());
console.log(result.isFindValidation());