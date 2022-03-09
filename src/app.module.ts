import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';
import { ChamadoService } from './chamados/chamado.service';
import { ChamadoController } from './chamados/chamado.controller';

@Module({
  imports: [LoginModule, 
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(),
    UserModule],
  controllers: [AppController, LoginController, UserController, ChamadoController],
  providers: [AppService, ChamadoService],
})
export class AppModule {}
