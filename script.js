function clearInput() {
    document.getElementById('calculatorInput').value = '';
}

function appendToInput(value) {
    document.getElementById('calculatorInput').value += value;
}

function calculate() {
    try {
        var inputField = document.getElementById('calculatorInput');
        var result = eval(inputField.value);
        
        if (isNaN(result) || !isFinite(result)) {
            inputField.value = 'Error';
        } else {
            inputField.value = result;
        }
    } catch (error) {
        document.getElementById('calculatorInput').value = 'Error';
    }
}
