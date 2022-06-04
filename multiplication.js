let x=1;
let y=1; 
function multiplicationTable (x, y){
    for(let i=1; i<=12; i++){
        for(let j=1; j<=12; j++){
         console.log(i + '*'  + j + '='  + i*j);
         
        }
        console.log();
    }
}
multiplicationTable (x,y);