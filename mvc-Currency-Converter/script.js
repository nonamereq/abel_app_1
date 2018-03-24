function exchangeRate(dollar,pound,euro){
    this.dollar = dollar;
    this.pound = pound;
    this.euro = euro;
}
exchangeRate.prototype.changeDollarValue = function(newDolarValue) {
    this.dollar = newDolarValue;
    
}
exchangeRate.prototype.changePoundValue = function(newPoundValue) {
    this.pound = newPoundValue;
    
}
exchangeRate.prototype.changeEuroValue = function(newEuroValue) {
    this.euro = newEuroValue;
    
}
exchangeRate.prototype.getDollar = function(){
    return this.dollar;
}
exchangeRate.prototype.getPound = function(){
    return this.pound;
}
exchangeRate.prototype.getEuro = function(){
    return this.euro;
}
var rate = new exchangeRate(27.781434 ,37.321596 , 34.140624);
                 document.getElementById("convertButton").onclick = function(){
                var birrInput = document.getElementById("ethBirrField").value;
                if(birrInput == ""){
                    document.getElementById("message").innerHTML = "please insert a valid number";                   
                }
                else {
                document.getElementById("message").innerHTML = " ";
                var birr = parseFloat(birrInput);
                var toDollar = birr * rate.getDollar();
                var toPound = birr * rate.getPound();
                var toEuro = birr * rate.getEuro();
                document.getElementById("usaDollarField").value = toDollar;
                document.getElementById("poundField").value = toPound;
                document.getElementById("euroField").value = toEuro;           
                }
        }
     