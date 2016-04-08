$(document).ready(function(){
  var authorArray = [];
  $('.authorCheckbox').change(function(){
    if($('.authorCheckbox').is(':checked')){
      authorArray.push($(this).val());
      console.log(authorArray);
      $('.authorsChecked').val(authorArray);
    }
  });
});
