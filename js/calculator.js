export function appNum(number) {
    document.getElementById('input').value += number
}

export function appOpe(operator) {
    document.getElementById('input').value += operator
}

export function calculate() {
    const displayValue = document.getElementById('input').value;
    const result = eval(displayValue);
    document.getElementById('input').value = result;
}

export function clearInput() {
    document.getElementById('input').value = '';
}