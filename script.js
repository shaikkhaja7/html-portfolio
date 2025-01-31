let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        // Replace "sqrt" with Math.sqrt and evaluate
        let result = display.value.replace(/sqrt/g, 'Math.sqrt');
        display.value = eval(result);
    } catch (e) {
        display.value = 'Error';
    }
}
