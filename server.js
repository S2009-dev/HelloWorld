const url = require('url');
const http = require('http');
const SessionManager = require('./utils/server/sessionManager');
const { showSoon, ready, showError, welcome } = require('./utils/server/logger');

const soon = false;
const releaseDate = '';
const version = '1.0.0';

const server = http.createServer((req, res) => {
  try {
    const userAgent = req.headers['user-agent'];

    if (/Mozilla|Chrome|Safari|Firefox|Opera|MSIE|Trident/.test(userAgent)) {
      res.writeHead(302, { 'Location': 'https://www.nanowar.it/' });
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text' });

      const session = new SessionManager(res);
      const delay = url.parse(req.url, true).query.delay || 3;

      if(soon){
        showSoon(session, releaseDate);
      } else {
        welcome(session, version, delay);
      }

      res.on('close', () => {
        session.disconnect();
      });

      process.on('uncaughtException', (error) => {
        showError(session, error);
      });
      
      process.on('unhandledRejection', (reason) => {
        showError(session, reason);
      });
    }
  } catch (e) {
    showError(res, e);
  }
});

server.listen(31224, () => {
  ready();
});