/* setTimeout(function () {
    console.log("The time in this case is 1 second");
},  2000); */

/* (function(){console.log('This very one is called Imediate Invocation Function Expression')})(); // IIFE */

let  counter =0;
function timeout(){
    setTimeout (function(){
        console.log ('Hi ' + counter++);
        timeout();
    },2000);
}
timeout();