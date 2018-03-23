var path = require('path'),
    rootPath = path.normalize(__dirname + '/../../');

  module.exports = {
    development: {
      rootPath: rootPath,
      //db: 'mongodb://localhost/mysite',
      port: process.env.PORT || 8000
    },
    production: {
      rootPath: rootPath,
      //db: "mongodb://irwindougie:My#1Site@ds054298.mongolab.com:54298/personal-site",
      port: process.env.PORT || 80
    }
  };
