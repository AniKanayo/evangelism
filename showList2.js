function showList(list){
    list.push('guava');
    console.log(list.length);
    for(let i=0; i<list.length; i++){
        console.log(list[i]);
    }
}
const shoppingList=['orange','apple','pear','carrot'];
showList(shoppingList);