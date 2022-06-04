function two (){
    return function () {
        return 'two';
    }
}
console.log(two()());