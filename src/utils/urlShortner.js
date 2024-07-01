const crypto = require("crypto");

class UrlShortenr {
  static generateShortUrl() {
    return crypto.randomBytes(6).toString("hex");
  }
}

module.exports = UrlShortenr;
