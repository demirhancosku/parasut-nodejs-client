const db = require('../db');

class Product {
    
    constructor() {
        this._id = null;
        this._code = null;
        this._name = null;
        this._vat_rate = 18;
        this._sales_excise_duty = 0;
        this._sales_excise_duty_type = 'percentage';
        this._purchase_excise_duty = 0;
        this._purchase_excise_duty_type = 'percentage';
        this._unit = null;
        this._communications_tax_rate = 0;
        this._archived = false;
        this._list_price = 0;
        this._currency = null;
        this._buying_price = 0;
        this._buying_currency = 'TRL';
        this._inventory_tracking = false;
        this._initial_stock_count = 0;
        
        this._category = null;
    }
    
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
    
    get code() {
        return this._code;
    }
    
    set code(value) {
        this._code = value;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
    
    get vat_rate() {
        return this._vat_rate;
    }
    
    set vat_rate(value) {
        this._vat_rate = value;
    }
    
    get sales_excise_duty() {
        return this._sales_excise_duty;
    }
    
    set sales_excise_duty(value) {
        this._sales_excise_duty = value;
    }
    
    get sales_excise_duty_type() {
        return this._sales_excise_duty_type;
    }
    
    set sales_excise_duty_type(value) {
        this._sales_excise_duty_type = value;
    }
    
    get purchase_excise_duty() {
        return this._purchase_excise_duty;
    }
    
    set purchase_excise_duty(value) {
        this._purchase_excise_duty = value;
    }
    
    get purchase_excise_duty_type() {
        return this._purchase_excise_duty_type;
    }
    
    set purchase_excise_duty_type(value) {
        this._purchase_excise_duty_type = value;
    }
    
    get unit() {
        return this._unit;
    }
    
    set unit(value) {
        this._unit = value;
    }
    
    get communications_tax_rate() {
        return this._communications_tax_rate;
    }
    
    set communications_tax_rate(value) {
        this._communications_tax_rate = value;
    }
    
    get archived() {
        return this._archived;
    }
    
    set archived(value) {
        this._archived = value;
    }
    
    get list_price() {
        return this._list_price;
    }
    
    set list_price(value) {
        this._list_price = value;
    }
    
    get currency() {
        return this._currency;
    }
    
    set currency(value) {
        this._currency = value;
    }
    
    get buying_price() {
        return this._buying_price;
    }
    
    set buying_price(value) {
        this._buying_price = value;
    }
    
    get buying_currency() {
        return this._buying_currency;
    }
    
    set buying_currency(value) {
        this._buying_currency = value;
    }
    
    get inventory_tracking() {
        return this._inventory_tracking;
    }
    
    set inventory_tracking(value) {
        this._inventory_tracking = value;
    }
    
    get initial_stock_count() {
        return this._initial_stock_count;
    }
    
    set initial_stock_count(value) {
        this._initial_stock_count = value;
    }
    
    get category() {
        return this._category;
    }
    
    set category(value) {
        this._category = value;
    }
    
    
    toJSON() {
        
        let object = {
            id: this._id,
            type: 'products',
            attributes: {
                code: this._code,
                name: this._name,
                vat_rate: this._vat_rate,
                sales_excise_duty: this._sales_excise_duty,
                sales_excise_duty_type: this._sales_excise_duty_type,
                purchase_excise_duty: this._purchase_excise_duty,
                purchase_excise_duty_type: this._purchase_excise_duty_type,
                unit: this._unit,
                communications_tax_rate: this._communications_tax_rate,
                archived: this._archived,
                list_price: this._list_price,
                currency: this._currency,
                buying_price: this._buying_price,
                buying_currency: this._buying_currency,
                inventory_tracking: this._inventory_tracking,
                initial_stock_count: this._initial_stock_count,
            },
        };
        
        if (this._category) {
            const category = db.getCategory(this._category);
            
            object.relationships = {
                category: {
                    data: {
                        id: category.id,
                        type: "item_categories",
                    }
                }
            }
        }
        
        return object;
    }
}

module.exports = Product;