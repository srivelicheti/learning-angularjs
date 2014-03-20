angular.module('invoice',['finance']).controller('InvoiceController',function(currencyConverter){
this.qty =1;
this.cost=2;
this.inCurr='EUR';
this.currencies = currencyConverter.currencies;
this.total = function(outCurr){
return currencyConverter.convert(this.qty *this.cost, this.inCurr,outCurr);
};
});
