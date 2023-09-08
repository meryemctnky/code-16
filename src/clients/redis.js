const Redis = require('ioredis');
const redis = new Redis({
  host: 'rediss://red-cjtjvjp5mpss73aip3e0:FRIkC9qEx4dvIaWvyKg3ok9yU2PB5wbF@oregon-redis.render.com',
  port: '6379',
});

export default redis;
