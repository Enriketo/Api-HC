import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';
import { MatchEntity } from './match.entity';
import { MatchSubscriber } from './match.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([MatchEntity])],
    exports: [TypeOrmModule],
    controllers: [MatchesController],
    providers: [MatchesService, MatchSubscriber]
})
export class MatchesModule {}
