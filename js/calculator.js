function appNum(number) {
    document.getElementById('input').value += number
}

function appOpe(operator) {
    document.getElementById('input').value += operator
}

function calculate() {
    const displayValue = document.getElementById('input').value;
    const result = eval(displayValue);
    document.getElementById('input').value = result;
}

function clearInput() {
    document.getElementById('input').value = '';
}

module.exports = { appNum, appOpe, calculate, clearInput };