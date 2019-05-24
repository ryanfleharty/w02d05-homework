
// Display the button pressed and add to the display
$(".btn").on('click',function(){
    $(".display").val($(".display").val()+$(this).val()); 
});

// Process the = button
$(".calc-btn").on('click',function(){
   $(".display").val(eval($(".display").val()));
});

// Process the clear button
$(".clear-btn").on('click',function(){
   $(".display").val('');
});
