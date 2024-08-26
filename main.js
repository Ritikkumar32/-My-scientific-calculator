
function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
    
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(eval(display.value));
}

function calculatePower() {
    const display = document.getElementById('display');
    display.value = Math.pow(eval(display.value.split('^')[0]), eval(display.value.split('^')[1]));
}

function calculateLog() {
    const display = document.getElementById('display');
    display.value = Math.log10(eval(display.value));
}

function calculateSin() {
    const display = document.getElementById('display');
    display.value = Math.sin(eval(display.value));
}

function calculateCos() {
    const display = document.getElementById('display');
    display.value = Math.cos(eval(display.value));
}

function calculateTan() {
    const display = document.getElementById('display');
    display.value = Math.tan(eval(display.value));
}
