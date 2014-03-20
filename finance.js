angular.module('finance', []).service('currencyConverter', function(){
this.currencies = ['USD','EUR','CNY'];
this.usdToForeignRates = {
USD:1,
EUR:0.74,
CNY:6.09
};
this.convert = function(amount,inCurr,outCurr){
return amount * this.usdToForeignRates[outCurr]/this.usdToForeignRates[inCurr.trim()];
};
});
