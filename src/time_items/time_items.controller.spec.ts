import { Test, TestingModule } from '@nestjs/testing';
import { TimeItemsController } from './time_items.controller';

describe('TimeItems Controller', () => {
  let controller: TimeItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeItemsController],
    }).compile();

    controller = module.get<TimeItemsController>(TimeItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
