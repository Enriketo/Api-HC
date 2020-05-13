import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidencesController } from './residences.controller';
import { ResidencesService } from './residences.service';
import { ResidenceEntity } from './residence.entity';
import { ResidenceSubscriber } from './residence.subscriber';

@Module({
    imports: [TypeOrmModule.forFeature([ResidenceEntity])],
    exports: [TypeOrmModule],
    controllers: [ResidencesController],
    providers: [ResidencesService, ResidenceSubscriber]
})
export class ResidencesModule {}
