import { Test, TestingModule } from '@nestjs/testing';
import { JwtDecryptService } from './jwt-decrypt.service';

describe('JwtDecryptService', () => {
  let service: JwtDecryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtDecryptService],
    }).compile();

    service = module.get<JwtDecryptService>(JwtDecryptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
