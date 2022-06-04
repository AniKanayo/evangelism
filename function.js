function three() {
    return function () {
        console.log ('three');
    }
}
let myfunction = three ();
console.log(typeof three);
myfunction ()
