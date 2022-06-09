import { Test, TestingModule } from "@nestjs/testing";
import { TimeItemsService } from "./time_items.service";

describe("TimeItemsService", () => {
  let service: TimeItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeItemsService]
    }).compile();

    service = module.get<TimeItemsService>(TimeItemsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
