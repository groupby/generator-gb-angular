'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var ConfigGenerator = module.exports = function ConfigGenerator(args, options, config) {

    yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(ConfigGenerator, yeoman.generators.NamedBase);

ConfigGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    if(_.size(this.config.getAll()) === 0) {
        this.log.writeln(chalk.red('!!ERROR!!') + " config is undefined, check .yo-rc.json");
        return;
    }

    cgUtils.askForModuleAndDir('config',this,false,null,cb);
};

ConfigGenerator.prototype.files = function files() {

    cgUtils.processTemplates(this.name,this.dir,'config',this,null,null,this.module);

};
