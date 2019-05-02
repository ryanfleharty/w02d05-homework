
// Display the button pressed and add to the display
$(".btn").on('click',function(){
    $(".display").val($(".display").val()+$(this).val()); 
});

// Process the = button
$(".calc-btn").on('click',function(){
   const expression = $(".display").val();
   $(".display").val(eval(expression));
});

// Process the clear button
$(".clear-btn").on('click',function(){
   $(".display").val('');
});
