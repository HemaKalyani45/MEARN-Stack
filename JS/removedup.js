var arr=[1,1,2,3,4,4,5]

var seen=[]
var dups=[]

for(let i=1;i<arr.length;i++){
    if(seen.includes(arr[i])){
       if(!dups.includes(arr[i])){
        
       }
    }else{
        seen.push(i)
    }
}

console.log(seen)