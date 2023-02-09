import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { UserDto } from './user/user.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UserService,
  ) {}

  @MessagePattern({ cmd: 'validateUser' })
  async validateUser(user: UserDto): Promise<boolean> {
    const dbUser = await this.usersService.findOne(user.username);
    console.log('validateUser', user.username, user.password)
    if (user && user.password === dbUser.password) {
      return true;
    }
    return false;
  }

  @EventPattern('validateUser')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log('validateUser', data);
  }
}
