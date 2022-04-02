const JWT_SECRET = "lvmbxsvlrkuvxjvbimzjvkzsawwjtfkg";

const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

module.exports = {
  JWT_SECRET,
  DB_CONFIG,
};
