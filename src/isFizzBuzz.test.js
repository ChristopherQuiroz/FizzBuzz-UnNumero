import isFizzBuzz from './isFizzBuzz.js';

describe('isFizzBuzz', () => {

    it('Deberia generar el mismo numero si no sigue una regla', () => {
        expect(isFizzBuzz(2)).toBe("2");
    });

});