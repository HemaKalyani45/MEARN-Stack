var a=[1,2,3,4,5];

a.push(6,7)
// a.push(7)
console.log(a);

a.pop();
console.log(a);


a.shift();
console.log(a);


a.unshift(10,20);
console.log(a)


let str=a.slice(2,6);
console.log(str);


a.splice(1,2);
console.log("deletion of splice",a)


a.splice(2,0,40,50);
console.log("addition ",a)


a.splice(1,2,20,30);
console.log("replace ",a);


a.splice(7,0,7,8)
console.log("replace at end",a);

a.splice(9,2)
console.log("delete out of array",a)

delete a[4];
console.log("delete ",a)



var b=[10,20,30,40,20,30,20]

var ind=b.indexOf(20)
var in1=b.indexOf(30)

console.log("index of 20:",ind);
console.log("index of 30:",in1)

var lind=b.lastIndexOf(20)
var lin1=b.lastIndexOf(30)

console.log("index of 20:",lind);
console.log("index of 30:",lin1)



b.sort((a,b)=>a-b);
console.log("ascending sort",b);

b.sort((a,b)=>b-a);
console.log("descending sort",b);



var name=['hema','kalyani','jd','likki']

console.log(name.sort())


b.reverse();
console.log(b);

name.reverse()
console.log(name);


console.log(name.join())
console.log(name.join(""))


console.log(name.join("-"))
console.log(name.join(" "))


console.