var a=5
for(let i=1;i<=a;i++){
    let str=" "
    for(let j=1;j<=i;j++){
        str+="*"
   
   
    }
   
    console.log(str)
}



//reverse right angled triangle

for(let i=1;i<=5;i++){
    let row=" ";
    for(let j=i;j<=5;j++){
    //for(let j=5;j>=i;j--){
      row +="*";
    }
    console.log(row);
}