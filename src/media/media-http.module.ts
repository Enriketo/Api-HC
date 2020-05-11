import { Module } from '@nestjs/common';
import { MediaModule } from './media.module';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';

@Module({
  imports: [MediaModule],
  providers: [MediaService],
  controllers: [MediaController]
})
export class MediaHttpModule {}
