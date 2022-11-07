const numbers = document.querySelectorAll("button.number");
const operatores = document.querySelectorAll("button.operator");
const reset = document.querySelector(".btn-long");
const equal = document.querySelector(".equal")
var second_number;
var first_number = 0;
var operator = "";
var result=0;
var checker = 0;
for(let j=0;j<operatores.length;j++){
    operatores[j].addEventListener("click",function(){
        operator = operatores[j].value;
        calculation();
        second_number = result;
        checker = 1;
        });
}
equal.addEventListener("click",calculation);
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener("click",function(){
        if(checker==0){
            document.querySelector(".text").value = document.querySelector(".text").value+numbers[i].value;
        }
        else{
            document.querySelector(".text").value = "";
            document.querySelector(".text").value = document.querySelector(".text").value+numbers[i].value;
            checker=0;
        }
    });
}
function calculation(){
    first_number = parseFloat(document.querySelector(".text").value);
    checking(first_number,second_number,operator);
    document.querySelector(".text").value = result;
}
function clear(){
    document.querySelector(".text").value="";
}
function checking(fn,sn,op){
    if(sn == undefined){
        if(op=="/" || op=="*"){
            result = operate(fn,1,op);
        }
        else{
            result = operate(fn,0,op);
        }
    }
    else{
    result = operate(fn, sn, op);
    }
}
function operate(num1=0, num2=0, operator){
    switch(operator){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break;
        default:
            return "invalid operator";
            break;
    }
}