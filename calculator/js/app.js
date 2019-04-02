console.log("running")

///////////////GLOBAL/////////////////////

//NONE I THINK


/////////////////FUNCTIONS///////////////
//SELECT NUMBERS/OPERATORS


//NUMBERS
$(".btn").on('click',function(){
     $(".display").val($(".display").val()+$(this).val()); //USE "THIS" OR ONLY 7 WILL SHOW
    })
//OPERATORS
// $(".calc-btn").on('click',function(){
//     $(".display").val($(".display").val()+$(this).val()); //USE "THIS" OR ONLY 7 WILL SHOW
//    })
//DID NOT NEED TO APPLY 'THIS' TO THE .display as it was not letting the eval() function
// to operate properly


//CALCULATE 
  $(".calc-btn").on('click',function(){
    const expression = $(".display").val();
    console.log(expression)   
          //NOT WORKING!!!! '=' sign showing up not letting expression evaluate
    $(".display").val(eval(expression));
  });
//WORKS^^ AFTER MUCH WORK AND GOOGLING


  //CLEAR DISPLAY
  $(".clear-btn").on('click',function(){
    $(".display").val('');
  });
  //WORKS OKAY^^


  //BACKSPACE FUNCTION
  $(".back-btn").on('click',function(){
    var $expression = $(".display").val();
    console.log($expression)
    $expression = $expression.substring(0,$expression.length - 1)
    console.log($expression)

    $(".display").val($expression)
   
  });
//WORKS!!!^^ YIPPIEEE

  // $(".calc-btn").on('click',function(){
  //   const expression = $(".display").val();
  //   console.log(expression)   
        
  // });
  // //NOT FUNCTIONAL^^^^

//////////////MAIN///////////////////







