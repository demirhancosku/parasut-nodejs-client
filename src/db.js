const loki = require('lokijs');

let tokenDB = null;
let categoryDB = null;

module.exports = {
    load(cb = false ){
        let db = new loki('parasut.db', {
            autoload: true,
            autoloadCallback : function () {
                tokenDB = db.getCollection("accessToken");
                categoryDB = db.getCollection("categories");
                
                if (tokenDB === null) {
                    tokenDB = db.addCollection("accessToken", { indices: ['access_token'] });
                }
                
                if(categoryDB === null){
                    categoryDB = db.addCollection("categories", { indices: ['key'] });
                }
    
                if(cb)
                    cb();
            },
            autosave: true,
            autosaveInterval: 2000
        });
    },
    getRefreshToken(firmNo){
        return tokenDB.findOne({'firmNo':firmNo});
    },
    setRefreshToken(firmNo, token){
        tokenDB.chain().find({'firmNo':firmNo}).remove();
        tokenDB.insert({ firmNo, ...token});
    },
    getCategoryList(){
        return categoryDB.find();
    },
    getCategory(key){
        return categoryDB.findOne({'key':key});
    },
    setCategory(key, data){
        categoryDB.chain().find({'key':key}).remove();
        categoryDB.insert({ key, ...data});
    }
}