import { Module } from "@nestjs/common";
import { MediaService } from "../services/media.service";
import { MediaController } from "../controllers/media.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Media } from "../entities/media.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  providers: [MediaService],
  controllers: [MediaController]
})
export class MediaModule {}
