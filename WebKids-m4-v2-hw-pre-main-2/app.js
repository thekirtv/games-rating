const http = require('http');
const server = http.createServer((req, res) => {
const staticFile = require('./appModules/http-utils/static-file')
const mimeTypes = require('./appModules/http-utils/mime-types')
const path = require('path')
const mainRouteController = require('./controllers/main')
const gameRouteController = require('./controllers/game')
const voteRouteController = require('./appModules/http-utils/vote')
const defaultRouteController = require('./controllers/default')

    const url = req.url;
    switch (url) {
        case "/":   
        mainRouteController(res, "/index.html", ".html");
          break;

        case "/game":
          gameRouteController(res);
          break;

        case "/vote":
          voteRouteController(req, res);
          break;

        default:            
        defaultRouteController(res, url);
      }
});

server.listen(3005);  