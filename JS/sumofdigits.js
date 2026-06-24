var num=123;
var sum=0;

while(num!=0){
    var res=num%10;
    sum=sum+res;
    num=parseInt(num/10);
}

console.log(sum);

//sumofdigits in array
// var n=[1,2,3,4];


// var result=n.reduce((acc,cur)=>acc+cur,0);
 
// console.log(result)
