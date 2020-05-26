import { Employees } from './employee.entity';

describe('Employees', () => {
  it('should be defined', () => {
    expect(new Employees()).toBeDefined();
  });
});
