function squareDigits(num){
  //may the code be with you
  let str = '';
  [...num].forEach(function(x){
    str = str + String(x * x);
  }); 
  return Number(str);
}