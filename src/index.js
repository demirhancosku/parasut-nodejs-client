const fs = require('fs');
const path = require('path');
const API = require('./api');
const config = require('../config');
const db = require('./db');

const modulesPath = path.join(`${__dirname}/modules`);
const actionsPath = path.join(`${__dirname}/actions`);
const modelsPath = path.join(`${__dirname}/models`);

const Parasut = function Parasut(firmNo, email, password) {
    this._clientId = config.client_id;
    this._clientSecret = config.client_secret;
    
    this._email = email;
    this._password = password;
    this._baseUrl = config.apiUrl;
    this._firmNo = firmNo;
    
    this.api = new API(this);
    this.load = db.load;
    
    this.setCategory = db.setCategory;
    this.getCategory = db.getCategory;
    this.getCategoryList = db.getCategoryList;
    
    
    let models = {};
    
    /**
     * Dynamic model loader
     */
    fs.readdirSync(modelsPath).forEach((model) => {
        models[model.replace('.js','')] = require(`${modelsPath}/${model}`);
    });
    
    this.models = models;
    
    let modules = {};
    
    /**
     * Dynamic module loader
     */
    fs.readdirSync(modulesPath).forEach((module) => {
        modules[module] = require(`${modulesPath}/${module}/index.js`)(this);
    });
    
    
    this.modules = modules;
    
    
};

exports = module.exports = Parasut;