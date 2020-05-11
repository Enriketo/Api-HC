import { EmployeeEntity } from './employee.entity';

describe('EmployEntity', () => {
  it('should be defined', () => {
    expect(new EmployeeEntity()).toBeDefined();
  });
});
