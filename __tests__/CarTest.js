import Car from '../src/Car.js';

describe('자동차 객체', () => {
  test('자동차는 처음에 위치 0에 있다', () => {
    const car = new Car();
    expect(car.getPosition()).toBe(0);
  });
});