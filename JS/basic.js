


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
























