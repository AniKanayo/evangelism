function dayOfMonth(month, year){
    const months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    if (month===1){
        return year% 4===0 && year %100!==1||year%400===0? 29:28;
    } 
    const monthsWith30days =[3,5,8,10];
    if (monthsWith30days.includes(months)){
        return 30;
    }
    else{
        return 31;
    }
}
console.log(dayOfMonth(1, 2024));