import isFizzBuzz from './isFizzBuzz.js';

describe('isFizzBuzz', () => {

    it('Deberia generar el mismo numero si no sigue una regla', () => {
        expect(isFizzBuzz(2)).toBe("2");
    });

    it('Deberia generar otro numero que no sigue la regla', () => {
        expect(isFizzBuzz(1)).toBe("1");
    });

    it('Deberia generar Fizz si el numero es 3', () => {
        expect(isFizzBuzz(3)).toBe("Fizz");
    });

    it('Deberia generar Fizz si el numero es multiplo de 3', () => {
        expect(isFizzBuzz(9)).toBe("Fizz");
    });

    it('Deberia generar Buzz si el numero es 5', () => {
        expect(isFizzBuzz(5)).toBe("Buzz");
    });

});