const mimeTypes = require("./mime-types");
const staticFile = require("./static-file");
const voteRouteController = require("./vote");
const parseBody = require("./parse-body");

module.exports = {
  mimeTypes,
  staticFile,
  voteRouteController,
  parseBody
};
