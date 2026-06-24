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

//reverse 

var row=5;

for(let i=1;i<=row;i++){
    let sp=" ";
    for(let j=1;j<=row-i;j++){
        sp +=" ";
    }
    for(let e=i;e<=row;e++){
        sp += "*";
    }

    console.log(sp);
}