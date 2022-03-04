import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entity/user.entity';
import { UserModule } from '../user/user.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]), UserModule],
  controllers: [LoginController],
  providers:[LoginService],
  exports:[LoginService],
})
export class LoginModule {}
