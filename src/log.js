const colors = require('colors/safe');
const config = require('../config');

module.exports = {
    print(message) {
        if(config.debug){
            console.log(colors.red('DEBUG: ') + colors.blue(message));
        }
    },
    table(object) {
        if(config.debug){
            console.table(object);
        }
    }
}