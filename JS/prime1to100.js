// for(let num=2;num<=100;num++){
//     let isPrime=true;
//     for(let i=2;i<num;i++){
//         if(num%i == 0){
//             isPrime=false;
//             break;

//         }
//     }
//     if(isPrime){
//     console.log(num)
// }
// }

var n=100;

for(let num=0;num<=n;num++){
    if(n<1){
            console.log("not prime")
        }
    for(let i=2;i<=num;i++){
        

        if(num%i!=0){
            console.log(num)
        }
    }
}
