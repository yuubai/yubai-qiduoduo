import { MidwayConfig } from '@midwayjs/core';
import { UserEntity } from '../entity/user.entity';

//配置数据库
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1656850257159_9223',
  koa: {
    port: 8081,
  },
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'qiduoduo',
    // synchronize: false,     // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
    entities:[UserEntity]
  },

} as MidwayConfig;
