
class EInvoice {
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
    
    get vat_withholding_code() {
        return this._vat_withholding_code;
    }
    
    set vat_withholding_code(value) {
        this._vat_withholding_code = value;
    }
    
    get vat_exemption_reason_code() {
        return this._vat_exemption_reason_code;
    }
    
    set vat_exemption_reason_code(value) {
        this._vat_exemption_reason_code = value;
    }
    
    get vat_exemption_reason() {
        return this._vat_exemption_reason;
    }
    
    set vat_exemption_reason(value) {
        this._vat_exemption_reason = value;
    }
    
    get scenario() {
        return this._scenario;
    }
    
    set scenario(value) {
        this._scenario = value;
    }
    
    get to() {
        return this._to;
    }
    
    set to(value) {
        this._to = value;
    }
    
    get invoice() {
        return this._invoice;
    }
    
    set invoice(value) {
        this._invoice = value;
    }
    
    constructor(isArchive = false) {
        this._id = null;
        this._vat_withholding_code = null;
        this._vat_exemption_reason_code = null;
        this._vat_exemption_reason = null;
        this._scenario = "commercial";
        this._to = null;
        this._invoice = null;
    
        this.isArchive = isArchive;
    
    }
    
    
    
    toJSON() {
        let object = {
            id: this._id,
            type: this.isArchive ? 'e_archives' :'e_invoices',
            attributes: {
                vat_withholding_code: this._vat_withholding_code,
                vat_exemption_reason_code: this._vat_exemption_reason_code,
                vat_exemption_reason: this._vat_exemption_reason,
                scenario: this._scenario,
            },
            relationships: {
                sales_invoice: {
                    data: {
                        id: this._invoice,
                        type: 'sales_invoices'
                    }
                },
            }
        }
        
        if(this.isArchive){
            object.attributes.internet_sale = {
                url: this.isArchive.url,
                payment_type: this.isArchive.type,
                payment_platform: this.isArchive.platform,
                payment_date: this.isArchive.date
            }
        }else{
            object.attributes.to = this._to
        }
        
        return object;
    }
}

module.exports = EInvoice;