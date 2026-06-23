var num=123;
var sum=0;

while(num!=0){
    var res=num%10;
    sum=sum+res;
   num=Math.floor(num/=10);
}

console.log(sum);

var n=123;
var reverse=0;
 while(n!=0){
     var result=n%10;
     reverse=reverse*10+result;
     n=Math.floor(n/=10);
    
 }

console.log(reverse); 


var a=5
for(let i=1;i<=a;i++){
    let str=" "
    for(let j=1;j<=i;j++){
        str+="*"
   
   
    }
   
    console.log(str)
}

var b=5;

for(let k=1;k<=b;k++){
    let pat=" ";
    
    for(let l=1;l<=b-k;l++){
        pat+=" ";
    }

    for(let m=1;m<=k;m++){
      pat+="*"
    }
    console.log(pat);
    
    
}


for(let nu=2;nu<=100;nu++){
     let isPrime=true;
    
       
        for(let i=2;i<=nu;i++){
        if(nu % i == 0){
            isPrime=false
        }
    }

    if(isPrime){
    console.log(nu);
}
}

