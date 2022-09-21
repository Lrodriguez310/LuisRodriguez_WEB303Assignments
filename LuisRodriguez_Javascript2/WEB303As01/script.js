/*
	WEB 303 Assignment 1 - jQuery
	{Luis Rodriguez - 0812903}
*/


// this is the jquery object (document)
$(document).ready(function(){   // This will start the function() 
                                // which is the code that will be run inside the paranthesis
                        //ready is the jquery method of the object
                         // the .ready()checks that the page is ready for the code being used
		                  // The code will go in between the brackets. This will start out the code.
		  
    
	
	$("input").on("keyup",function(){     //when the variables are inputted by the user the keyup function fires up the code.
       
	   let salary=$('#yearly-salary').val();  // assigning the variable of the ID yearly-salary so that it will be Salary
         
		 let percent=$('#percent').val(); // assigning the variable of the ID percent so that it will become percent

           let amount= salary*percent/100;  // Assigning variable of the math equation to amount
         
             jQuery("span#amount").html('$'+amount.toFixed(2));  // the tofixed will set the decimal place so that the odd numbers can be split 
		// jquery taking from the html<span id="amount">$0</span> --- The money amount plus the 2 decimal places.             
		                        

        
    
	
	})  //closing code
}) //ending code

