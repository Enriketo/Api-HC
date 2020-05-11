import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { StateEntity } from './state.entity';

@Module({
    imports: [TypeOrmModule.forFeature([StateEntity])],
    exports: [TypeOrmModule],
    controllers: [StatesController],
    providers: [StatesService]
})
export class StatesModule {}
