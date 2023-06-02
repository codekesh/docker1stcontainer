import {
    appNum, appOpe, calculate, clearInput
} from './calculator.js'

describe('Calculator', () => {
    beforeEach(() => {
        document.getElementById('input').value = '';
    });

    test('append 2 number', () => {
        appNum('1')
        expect(document.getElementById('input').value).toBe('1');

        appNum('2');
        expect(document.getElementById('input').value).toBe('12');

        appNum('3');
        expect(document.getElementById('input').value).toBe('123');
    })

    test('append operator in the input', () => {
        appNum('1')
        appOpe('+')
        expect(document.getElementById('input').value).toBe('1+');

        appNum('12')
        appOpe('*')
        expect(document.getElementById('input').value).toBe('1+12*');
    })

    test('calculate the result', () => {
        appNum('1')
        appOpe('+')
        appNum('12')
        calculate()
        expect(document.getElementById('input').value).toBe(13);
        
        appNum('13')
        appOpe('*')
        appNum('12')
        calculate()
        expect(document.getElementById('input').value).toBe(156);
    })

    test('clearing the input', () => {
        appNum('13')
        appOpe('*')
        appNum('12')
        clearInput()
        expect(document.getElementById('input').value).toBe('');
    })
});