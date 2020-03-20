const db = require('../db');
const moment = require('moment');

class Invoice {
    
    constructor() {
        this._id = null;
        this._item_type = 'invoice';
        this._description = null;
        this._issue_date = moment().format('YYYY-MM-DD');
        this._due_date = moment().format('YYYY-MM-DD');
        this._invoice_series = null;
        this._invoice_id = null;
        this._currency = 'TRL';
        this._billing_address = null;
        this._billing_phone = null;
        this._tax_office = null;
        this._tax_number = null;
        this._city = null;
        this._district = null;
        this._is_abroad = null;
        this._order_no = null;
        this._shipment_addres = null;
        this._shipment_included = false;
        this._order_date = moment().format('YYYY-MM-DD');
        
        this._contact = null;
        this._product = null;
        this._category = null;
        
    }
    
    
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
    
    get item_type() {
        return this._item_type;
    }
    
    set item_type(value) {
        this._item_type = value;
    }
    
    get description() {
        return this._description;
    }
    
    set description(value) {
        this._description = value;
    }
    
    get issue_date() {
        return this._issue_date;
    }
    
    set issue_date(value) {
        this._issue_date = value;
    }
    
    get due_date() {
        return this._due_date;
    }
    
    set due_date(value) {
        this._due_date = value;
    }
    
    get invoice_series() {
        return this._invoice_series;
    }
    
    set invoice_series(value) {
        this._invoice_series = value;
    }
    
    get invoice_id() {
        return this._invoice_id;
    }
    
    set invoice_id(value) {
        this._invoice_id = value;
    }
    
    get currency() {
        return this._currency;
    }
    
    set currency(value) {
        this._currency = value;
    }
    
    get billing_address() {
        return this._billing_address;
    }
    
    set billing_address(value) {
        this._billing_address = value;
    }
    
    get billing_phone() {
        return this._billing_phone;
    }
    
    set billing_phone(value) {
        this._billing_phone = value;
    }
    
    get tax_office() {
        return this._tax_office;
    }
    
    set tax_office(value) {
        this._tax_office = value;
    }
    
    get tax_number() {
        return this._tax_number;
    }
    
    set tax_number(value) {
        this._tax_number = value;
    }
    
    get city() {
        return this._city;
    }
    
    set city(value) {
        this._city = value;
    }
    
    get district() {
        return this._district;
    }
    
    set district(value) {
        this._district = value;
    }
    
    get is_abroad() {
        return this._is_abroad;
    }
    
    set is_abroad(value) {
        this._is_abroad = value;
    }
    
    get order_no() {
        return this._order_no;
    }
    
    set order_no(value) {
        this._order_no = value;
    }
    
    get shipment_addres() {
        return this._shipment_addres;
    }
    
    set shipment_addres(value) {
        this._shipment_addres = value;
    }
    
    get shipment_included() {
        return this._shipment_included;
    }
    
    set shipment_included(value) {
        this._shipment_included = value;
    }
    
    get order_date() {
        return this._order_date;
    }
    
    set order_date(value) {
        this._order_date = value;
    }
    
    
    set contact(value) {
        this._contact = value;
    }
    
    set product(value) {
        this._product = value;
    }
    
    set category(value) {
        this._category = value;
    }
    
    get category() {
        return this._category;
    }
    
    
    toJSON() {
        
        let object = {
            id: this._id,
            type: 'sales_invoices',
            attributes: {
                item_type: this._item_type,
                description: this._description,
                issue_date: this._issue_date,
                due_date: this._due_date,
                invoice_series: this._invoice_series,
                invoice_id: this._invoice_id,
                currency: this._currency,
                billing_address: this._billing_address,
                billing_phone: this._billing_phone,
                tax_office: this._tax_office,
                tax_number: this._tax_number,
                city: this._city,
                district: this._district,
                is_abroad: this._is_abroad,
                order_no: this._order_no,
                shipment_addres: this._shipment_addres,
                shipment_included: this._shipment_included,
                order_date: this._order_date,
            },
            relationships: {
                details: {
                    data: [
                        {
                            id: null,
                            type: 'sales_invoice_details',
                            attributes: {
                                quantity: 1,
                                unit_price: this._product.price,
                                vat_rate: 18
                            },
                            relationships: {
                                product: {
                                    data: {
                                        id: this._product.id,
                                        description: this._product.description,
                                        type: 'products'
                                    }
                                }
                            }
                        }
                    ]
                },
                contact: {
                    data: {
                        id: this._contact.id,
                        type: 'contacts'
                    }
                }
            }
        }
        
        if (this._category) {
            const category = db.getCategory(this._category);
            
            object.relationships.category = {
                data: {
                    id: category.id,
                    type: "item_categories",
                }
            }
        }
        
        return object;
    }
}

module.exports = Invoice;