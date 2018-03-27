var path = require('path');
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./server/webpack/webpack.prod')({ env: 'production' });
        break;
    case 'test':
    case 'testing':
        module.exports = require('./server/webpack/webpack.test')({ env: 'test' });
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./server/webpack/webpack.dev')({ env: 'development' });
        break;
}
