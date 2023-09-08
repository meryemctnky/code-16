const Redis = require('ioredis');

let redis = Redis.createClient({
  legacyMode: true,
  socket: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_URL,
  },
});

export default redis;
