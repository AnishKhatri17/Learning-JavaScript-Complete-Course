// For Loop = repeat a block of code a Limited amount of times ..

for(let i = 0; i<=2; i++){
    // console.log("Hello");
    console.log(i);
}

for(let j = 0; j<=5; j+=2){
    // console.log("Hello");
    console.log(j);
}


for(let k = 10; k>0; k--){
    // console.log("Hello");
    console.log(k);
}

console.log("Happy New Year 2025 !!!!!")

        //Continue Statement
        for(let a = 1; a<=20; a++){
            if(a==13){
                continue;
            }
            else{
                console.log(a);
            } 
        }

        //Break Statement
        for(let b = 1; b<=20; b++){
            if(b==13){
                break;
            }

            else{
                console.log(b);
            }
        }