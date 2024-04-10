const { format } = require("timeago.js");
const Handlebars = require("handlebars");

Handlebars.registerHelper("isNA", (value) => {
  return value === 'N/A';
});

Handlebars.registerHelper("existeAdjunto", (value) => {
  return value;
});

const helpers = {};

helpers.timeago = (timestamp) => {
  return format(timestamp);
};

module.exports = helpers;
