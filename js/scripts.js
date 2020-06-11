$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const romanInput = $("input#roman").val();
    $("#answer").text(romanInput);
  })

});