var arr=[1,1,2,3,4,4,5]

var seen=[]

for(let i=1;i<arr.length;i++){
    if(seen.includes(arr[i])){
       
    }else{
        seen.push(i)
    }
}

console.log(seen)