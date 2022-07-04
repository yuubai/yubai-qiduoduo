// import UserLoginDTO from '../dto/user.dto'
// const jack  = {
//   username: "jack",
//     password: "redballoon"
// }


import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserModel } from '../model/user.model';

@Controller('/api/user/login')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserModel;

  @Get('/get_user')
  async getUser(@Query('username') username) {
    const user = await this.userService.getUserByUsernameAndPassword(username);
    console.log('user : ',user)
    return { success: true, message: 'OK', data: user };
  }
}
