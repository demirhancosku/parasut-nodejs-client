const moment = require('moment');

class Payment {
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
    
    get description() {
        return this._description;
    }
    
    set description(value) {
        this._description = value;
    }
    
    get account_id() {
        return this._account_id;
    }
    
    set account_id(value) {
        this._account_id = value;
    }
    
    get date() {
        return this._date;
    }
    
    set date(value) {
        this._date = value;
    }
    
    get amount() {
        return this._amount;
    }
    
    set amount(value) {
        this._amount = value;
    }
    
    get exchange_rate() {
        return this._exchange_rate;
    }
    
    set exchange_rate(value) {
        this._exchange_rate = value;
    }
    
    constructor() {
        this._id = null;
        this._description = null;
        this._account_id = null;
        this._date = moment().format('YYYY-MM-DD');
        this._amount = 0;
        this._exchange_rate = null;
        
    }
    
    
    
    toJSON() {
        
        return {
            id: this._id,
            type: 'payments',
            attributes: {
                description: this._description,
                account_id: this._account_id,
                date: this._date,
                amount: this._amount,
                exchange_rate: this._exchange_rate
            },
        }
    }
}

module.exports = Payment;