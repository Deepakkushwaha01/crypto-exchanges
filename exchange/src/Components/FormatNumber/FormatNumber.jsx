

export const FormatNum=(Number)=>{

const billion=1e9;    // its means 1*10 power 9 means its shows 1 billion
const million=1e6;
const thousand=1e3;
const hundred=1e2;


if(Number && Number>=billion){
return `${(Number/billion).toFixed(2)} billion`       // here number divide by billion and here toFixed(2) manage number After decimal , After decimal Numbers length is not greater than 2
}
else if(Number && Number>=million){
    return `${(Number/million).toFixed(2)} million`  
}
else if(Number && Number>=thousand){
    return `${(Number/thousand).toFixed(2)} thousand`  
}
else if(Number && Number>=hundred){
    return `${(Number/hundred).toFixed(2)} hundred`  
}
else{
    return `${Number} ` 
}
}