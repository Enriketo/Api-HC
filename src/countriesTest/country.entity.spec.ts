import { Country } from './country.entity';

describe('CountryEntity', () => {
  it('should be defined', () => {
    expect(new Country()).toBeDefined();
  });
});
