Calculator

This is the final project for the odin project foundations course

for the first value, whenever a number is pressed, its appended into a varriable 

then, when an operator button is pressed its stops recoding for the first value

then the second value is recorded into its own variable

when the equality button is pressed the first and second value and the operator are passed into the operation function

if an operator button is being pressed for the second time after an initial operation without clicking the equality button, then the function should first operate and then use the result as a first value



numbers click button function{
    for each of the buttons(button){
        when clicked =>function{
            if (first click) {
                remove zero and add number
            }else{
                append new number
            }

        }
    }
}

operator click button function{
    for each of the buttons(button){
        when clicked =>function{
            if (first click){
                do nothing
            }else{
                assign the content of the display to first val
                assign id of button to operator
            } 
        }
    }
    
}

equality button click function{
    if(first click){
        do nothing
    }else{
        assign content of display to second value
        execute calculation function
    }
}

clear button click function{
    display.text = 0;
}