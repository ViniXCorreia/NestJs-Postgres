import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { producerRuralModule } from './modules/producer-rural/producer-rural.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' }),
    TypeOrmModule.forRoot(),
    UserModule,
    producerRuralModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
