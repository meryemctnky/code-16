const Redis = require('ioredis');
const redis = new Redis({
  url: 'rediss://red-cjtjvjp5mpss73aip3e0:FRIkC9qEx4dvIaWvyKg3ok9yU2PB5wbF@oregon-redis.render.com:6379',
});

export default redis;
