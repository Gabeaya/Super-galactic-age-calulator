import Calculator from '../src/Calculator.js';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator( 25,'MARS', 65);
  });
  
  test('should be able to hold three parameters: given earth age, the selected planet, the users life expectancy', () => {
    expect(calculator.earthAge).toEqual(25);
    expect(calculator.selectedPlanet).toEqual('MARS');
    expect(calculator.userLifeExpectancy).toEqual(65);
  });
  test('should correctly return calculated age of given planet', () => {
    expect(calculator.alienAge()).toEqual(47.0525);
  })
  test('should inform user of how many years they would have left or how many they lived past expectation on a given planet', () => {
    expect(calculator.deathYear()).toEqual(75.284);
  })
});
