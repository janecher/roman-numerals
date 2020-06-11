//business logic
const reverseNumber = function(number){
  let result=[];
  while(number > 0){
    let remainder = number%10;
    result.push(remainder); //= result*10 + remainder;
    number = Math.floor(number/10);
  }
  return result;
}
/*let convertDigitArray = [];
let answer = "";
for (let index = array.length-1; index >=0; index--){
  answer += array[index];
}*/

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const romanInput = parseInt($("input#number").val());
    if(!romanInput || romanInput < 1 || romanInput > 3999){
      alert("Incorrect input, the number must be between 1 and 3,999");
      $("input#number").val("");
      return;
    }
    $("#answer").text(romanInput);
  });

});