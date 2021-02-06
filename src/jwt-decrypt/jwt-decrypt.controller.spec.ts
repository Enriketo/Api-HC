import { Test, TestingModule } from "@nestjs/testing";
import { JwtDecryptController } from "./jwt-decrypt.controller";

describe("JwtDecrypt Controller", () => {
  let controller: JwtDecryptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JwtDecryptController]
    }).compile();

    controller = module.get<JwtDecryptController>(JwtDecryptController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
