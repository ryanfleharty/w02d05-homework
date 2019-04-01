console.log("Calculator");

//NUMBERS
$('.btn').on('click', function(){
	$('.inputField').val($('.inputField').val()+$(this).val());
});

//CALCULATE
$('.calcButton').on('click',function(){
   const expression = $('.inputField').val();
   console.log(expression)
   $('.inputField').val(eval(expression));
 });

//CLEAR
$('.clear').on('click', function(){
	$('.inputField').val('');
});




















