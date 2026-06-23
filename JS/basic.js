var a=6;
var b=2;
var c=7;
var d=5;
var res=a<b?(a<c?(a<d?a:d):c):(b<c?(b<d?b:d):c);
console.log(res);


var uname="hema";
console.log(uname);//heme


uname="h";
console.log(uname);
var uname;//h

console.log(lname);
var lname="kal";//undefined


var uname="h";
console.log(uname);//h
if(true){
    console.log(uname);//h
}

var uname="h";
console.log(uname);//h
if(true){
    let uname="k"
    console.log(uname);//k
}
console.log(uname);//error



var a=0;
var b=6;
var c=7;
var res=a&&c;
console.log(res);


let arr=[0,1,2,4,3];
//arr.length=0;
//arr=[]

console.log(arr);


console.log(0.1+0.2===0.3);


const obj1={
    name:"hema",
    age:21
}

const obj2={
    name:"likitha",
    age:24
}

const result={...obj1,...obj2};
console.log(result);







var num=123;
var sum=0;

while(num!=0){
    var res=num%10;
    sum=sum+res;
    num/=10
}

console.log(sum);



for(let nu=2;nu<=100;nu++){
     let isPrime=true;
    
       
        for(let i=2;i<nu;i++){
        if(nu % i == 0){
            isPrime=false;
            break;
        }
    }

    if(isPrime){
    console.log(nu);
}
}













