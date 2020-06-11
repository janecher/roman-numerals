//business logic
const reverseNumber = function(number){
  let result=0;
  while(number > 0){
    let remainder = number%10;
    result = result*10 + remainder;
    number = Math.floor(number/10);
  }
  return result;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const romanInput = $("input#number").val();
    $("#answer").text(romanInput);
  });

});