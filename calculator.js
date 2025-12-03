let display=document.getElementById("inputValue");

function addValues(input) {
    display.value += input ;
}

function calculate() {
    display.value =eval(display.value) ;
}

function cleardisplay() {
    display.value=" ";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}