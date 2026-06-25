var arr=[1,2,3,4,5,6,7,8]

var even =arr.filter(ev => (ev%2==0));

var sum = even.reduce((acc,cur)=>acc+cur,0)

console.log(sum)