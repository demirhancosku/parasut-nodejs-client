const config = require('../config');
const Parasut = require('../src');

/**
 * Parasut Client Instance
 * @type {Parasut}
 */
const parasut = new Parasut(config.PARASUT_FIRM_NO, config.PARASUT_EMAIL, config.PARASUT_PASSWORD);


parasut.load(async () => {
    //TODO: After load processes
    console.log('Loaded successfully');
});
