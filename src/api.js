"use strict";
const axios = require('axios');
const db = require('./db');
const log = require('./log');

class API {
    
    constructor(parasut) {
        this._parasut = parasut;
    }
    
    getOption(key){
        if(this._parasut.hasOwnProperty('_'+key)){
            return this._parasut['_'+key];
        }
        
        return false;
    }
    
    getAccessToken(){
        return db.getRefreshToken(this.getOption('firmNo'));
    }
    
    setAccessToken(accessToken){
        db.setRefreshToken(this.getOption('firmNo'), accessToken);
    }
    
    send(method, endpoint, params = {}, isV4 = true, addFirmNo = true) {
        let self = this;
        let accessToken = this.getAccessToken();
        let firmNo = this.getOption('firmNo');
        
        return new Promise(function (resolve, reject) {
            
            let url = (isV4 ? 'v4/' : '')  + (addFirmNo ? firmNo : '') + '/' + endpoint;
            
            if (method.toLowerCase() === 'get' || method.toLowerCase() === 'delete') {
                url += `?${Object.keys(params)
                    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
                    .join('&')}`;
            }
            
            const queryOptions = {
                method,
                url: self.getOption('baseUrl')+url,
                responseType: 'json',
                timeout: 30000,
            };
            
            if(accessToken){
                queryOptions.headers = {
                    Authorization: 'Bearer ' + accessToken.access_token
                }
            }
            
            let req;
            
            let data;
            
            
            if (method.toLowerCase() !== 'get') {
                
                data = params;
                
                if (method.toLowerCase() === "delete") {
                    req = axios.delete(queryOptions.url, queryOptions);
                } else if (method.toLowerCase() === "put") {
                    req = axios.put(queryOptions.url, data, queryOptions);
                }else{
                    req = axios.post(queryOptions.url, data, queryOptions);
                }
            } else {
                req = axios.get(queryOptions.url, queryOptions);
            }
            
            log.print(method + ': ' + queryOptions.url);
            
            req
                .then((api_response) => {
                    if (api_response) {
                        resolve(api_response.data);
                    }
                }).catch((err) => {
                    
                    if(err.response.status === 404){
                        reject({status: 404, errors: err.response.data.errors})
                    }else{
                        reject({status: 500, errors: err.response.data.errors});
                    }
            });
        });
        
    }
    
    async refreshToken(){
        
        const token = await this.send('post', 'oauth/token', {
            grant_type: "password",
            client_id: this.getOption('clientId'),
            client_secret: this.getOption('clientSecret'),
            username: this.getOption('email'),
            password: this.getOption('password'),
            redirect_uri: 'urn:ietf:wg:oauth:2.0:oob'
        }, false, false);
        
        this.setAccessToken(token);
    }
    
    async auth() { //Auth Check
        
        const accessToken = this.getAccessToken();
        
        if(accessToken){
            
            const diffTimestamp =  Math.floor(new Date().getTime() / 1000) - accessToken.created_at;
    
            const minDifference = Math.floor(diffTimestamp/60);
            
            if(minDifference < 120){
                log.print('Access Token Usable');
                return true;
            }
        }
        
        await this.refreshToken();
        
        log.print('Access Token Refreshed');
        
        return true;
    }
    
    
    async api_call(method, endpoint, params, isV4, addFirmNo) //Api call
    {
        await this.auth();
        return this.send(method, endpoint, params, isV4, addFirmNo)
    }
}

module.exports = API;