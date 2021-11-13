const pkg = require('../package.json');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return h.view('home/index', {
        server_name: pkg.name,
        server_version: pkg.version,
      });
    },
    config: {},
  },
  {
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {
      return '404 Error! Page Not Found!';
    },
  },
];
