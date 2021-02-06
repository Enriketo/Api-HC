import { Countries } from "./country.entity";

describe("Countries", () => {
  it("should be defined", () => {
    expect(new Countries()).toBeDefined();
  });
});
