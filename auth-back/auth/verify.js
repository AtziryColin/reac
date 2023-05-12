const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyAccessToken(token) {
  console.log("lol", process.env.ACCESS_TOKEN_SECRET);
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  return decoded;
}

function verifyRefreshToken(token) {
  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  return decoded;
}
module.exports = { verifyAccessToken, verifyRefreshToken };
