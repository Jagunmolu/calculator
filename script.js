let display = document.getElementById('display');
let calculated = false;

function appendInput(value) {
    if (calculated && !isNaN(value)) {
        clearDisplay();
        calculated = false;
    }
    calculated = false;
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
        calculated = true;
    } catch (error) {
        display.value = 'Error';
        calculated = true;
    }
}
