const middleware = {}

middleware['auth'] = require('../middleware/auth.js');
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['getHTTP'] = require('../middleware/getHTTP.js');
middleware['getHTTP'] = middleware['getHTTP'].default || middleware['getHTTP']

middleware['moment'] = require('../middleware/moment.js');
middleware['moment'] = middleware['moment'].default || middleware['moment']

export default middleware
