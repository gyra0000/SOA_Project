import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// @ts-ignore
import { ClientProxy } from '@nestjs/microservices';
import { USER_SERVICE } from './user_service.constants';
import { Inject } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_SERVICE) private readonly client: ClientProxy,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    this.client.emit('validateUser', { type: 'async' });
    const pattern = { cmd: 'validateUser' };
    const data = { username: username, password: pass}
    console.log('validateUser', username, pass)
    const response = await this.client.send<boolean>(pattern, data).toPromise();
    if (response == true) {
      console.log('validateUser success')
      const { password, ...result } = data;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
