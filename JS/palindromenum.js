const prompt = require("prompt-sync")();

var num=Number(prompt("Enter a number:"));

var temp=num;

var pal=0;

while(num != 0){
    var digit=num%10;
    pal=pal*10+digit;
    num=parseInt(num/10)

}

if(temp === pal){
    console.log("palindrome")
}else{
    console.log("Not Palindrome")
}