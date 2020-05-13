import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { MediaEntity } from './media.entity';
import { MediaSubscriber } from './media.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([MediaEntity])],
    exports: [TypeOrmModule],
    controllers: [MediaController],
    providers: [MediaService, MediaSubscriber]
})
export class MediaModule {}
