import { Repository } from "typeorm";
import { UserEntity } from '../entity/user.entity'
export class UserModel {
  // @InjectEntityModel(UserEntity)
  userRepo: Repository<UserEntity>;

  /**
   * 根据用户名和密码获取用户信息
   * @param username {String} 用户名
   * @param password {String} 用户密码
   */

  async getUserByUsernameAndPassword(username, password): Promise<any> {
  // ...
    let jack = {
      name:'jack',
      password:'redballoon'
    }
    return new Promise((resolve) =>{
      resolve(jack)
    })
  }


  // async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {
  // // ...
  //
  // }
}
