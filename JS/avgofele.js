var arr=[1,2,3,4,5]

var sum=arr.reduce((acc,cur) => acc+cur,0)

arr1=arr.length-1

var avg=parseInt(sum/arr1);

console.log(avg)