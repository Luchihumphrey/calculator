// select all the buttons
const button = document.querySelectorAll('button');

//select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');



// add eventListener to each button
button.forEach(function(button) {
    button.addEventListener('click', calculate);
});


//calculate function
function calculate(event) {
    // current clicked button value
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        //clear everything on display
        display.value = '';
    } else {
        // otherise concatenate it to display
        display.value += clickedButtonValue;
    }
}