var n=123;
var reverse=0;
 while(n!=0){
     var result=n%10;
     reverse=reverse*10+result;
     //n=Math.floor(n/=10);
     n=parseInt(n/=10);
    
 }

console.log(reverse); 