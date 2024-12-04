import {doMultiply} from './tasks';
test('Multiplies 2 * 2 to equal 4', () => { 
    expect(doMultiply(2, 2)).toBe(4);
});
test('Multiplies 3 * 2 to equal 6', () => { 
    expect(doMultiply(3, 2)).toBe(62); 

});