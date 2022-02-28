import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { Usuario.Service.TsService } from './usuario/usuario.service.ts/usuario.service.ts.service';
import { UsuarioService } from './usuario/usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario/usuario.module';

@Module({
  imports: [LoginModule, 
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(),
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService, Usuario.Service.TsService, UsuarioService],
})
export class AppModule {}
