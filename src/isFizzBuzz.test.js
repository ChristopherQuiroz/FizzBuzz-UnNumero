import isFizzBuzz from './isFizzBuzz.js';

describe('isFizzBuzz', () => {

    it('Deberia generar el mismo numero si no sigue una regla', () => {
        expect(isFizzBuzz(2)).toBe("2");
    });

    it('Deberia generar otro numero que no sigue la regla', () => {
        expect(isFizzBuzz(1)).toBe("1");
    });

});