function HelloController($scope,$location){
$scope.greeting = {text:'Hella'};
console.log($location);

}
angular.module('invoice1',[]).controller('InvoiceController', function(){
this.qty = 1;
this.cost = 2;
this.inCurr = 'EUR';
this.currencies = ['USD','EUR','CNY'];
this.usdToForeignRates = {
USD:1,
EUR:0.74,
CNY:0.69
};
this.total = function total(outCUrr){
return this.convertCurrency(this.qty * this.cost,this.inCurr.trim(),outCUrr);
};

this.convertCurrency = function convertCurrency(amount, inCurr,outCurr){
return amount * this.usdToForeignRates[outCurr]/this.usdToForeignRates[inCurr];
};
this.pay = function pay(){
alert('THank you');
};
});
