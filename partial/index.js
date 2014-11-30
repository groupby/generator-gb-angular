'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var cgUtils = require('../utils.js');
var _ = require('underscore');
var chalk = require('chalk');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var PartialGenerator = module.exports = function PartialGenerator(args, options, config) {

  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(PartialGenerator, yeoman.generators.NamedBase);

PartialGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  if (_.size(this.config.getAll()) === 0) {
    console.error("ERROR: config is undefined, check .yo-rc.json");
    return;
  }

  var prompts = [
    {
      name: 'parentRoute',
      message: 'Enter the parent route for the new route (i.e. /grandparent/parent/).\n' +
        'For root route, just add \'/\'. If you don\'t want a route added for you, leave this empty.'
    }
  ];

  this.prompt(prompts, function (props) {
    this.parentRoute = props.parentRoute;

    // This whole IF block is intended to define the route and state, depending on the input
    if (this.parentRoute && this.parentRoute.length > 0) {
      if (this.parentRoute[0] === '/') {
        this.parentRoute = this.parentRoute.slice(1);
      }

      if (this.parentRoute.length > 0 && this.parentRoute[this.parentRoute.length - 1] !== '/') {
        this.parentRoute = this.parentRoute + '/';
      }

      // If the parent route is not blank at this point, use it to build the state.
      // Otherwise the state is the name.
      if (this.parentRoute.length > 0) {
        this.state = this.parentRoute.replace('/', '.') + this.name;
      } else {
        this.state = this.name;
      }
    }

    cgUtils.askForModuleAndDir('partial', this, true, this.parentRoute, cb);
  }.bind(this));
};

PartialGenerator.prototype.files = function files() {

  this.ctrlname = _.camelize(_.classify(this.name)) + 'Ctrl';

  cgUtils.processTemplates(this.name, this.dir, 'partial', this, null, null, this.module);

  if (this.state && this.state.length > 0) {
    var route = '/' + this.name;
    var partialUrl = this.dir + this.name + '.html';
    var file = path.join(path.dirname(this.module.file), '/config/routes.js');
    cgUtils.injectRoute(file, this.config.get('uirouter'), this.state, route, partialUrl, this);
  }

};
