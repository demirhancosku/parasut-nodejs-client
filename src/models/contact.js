
class Contact {
    
    constructor(type) {
        this._id = null;
        this._email = null;
        this._name = null;
        this._short_name = null;
        this._contact_type = null;
        this._tax_office = null;
        this._tax_number = null;
        this._district = null;
        this._city = null;
        this._address = null;
        this._phone = null;
        this._fax = null;
        this._is_abroad = null;
        this._archived = null;
        this._iban = null;
        this._account_type = type;
        this._users = [];
    }
    
    
    get id() {
        return this._id;
    }
    
    set id(value) {
        this._id = value;
    }
    
    get email() {
        return this._email;
    }
    
    set email(value) {
        this._email = value;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
    
    get short_name() {
        return this._short_name;
    }
    
    set short_name(value) {
        this._short_name = value;
    }
    
    get contact_type() {
        return this._contact_type;
    }
    
    set contact_type(value) {
        this._contact_type = value;
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
    
    get district() {
        return this._district;
    }
    
    set district(value) {
        this._district = value;
    }
    
    get city() {
        return this._city;
    }
    
    set city(value) {
        this._city = value;
    }
    
    get address() {
        return this._address;
    }
    
    set address(value) {
        this._address = value;
    }
    
    get phone() {
        return this._phone;
    }
    
    set phone(value) {
        this._phone = value;
    }
    
    get fax() {
        return this._fax;
    }
    
    set fax(value) {
        this._fax = value;
    }
    
    get is_abroad() {
        return this._is_abroad;
    }
    
    set is_abroad(value) {
        this._is_abroad = value;
    }
    
    get archived() {
        return this._archived;
    }
    
    set archived(value) {
        this._archived = value;
    }
    
    get iban() {
        return this._iban;
    }
    
    set iban(value) {
        this._iban = value;
    }
    
    set iban(value) {
        this._iban = value;
    }
    
    
    addUser(id, name, email, phone, note = '') {
        this._users.push({
            id,
            name,
            email,
            phone,
            note
        })
    }
    
    
    toJSON() {
        return {
            id: this._id,
            type: 'contacts',
            attributes: {
                email: this._email,
                name: this._name,
                short_name: this._short_name,
                contact_type: this._contact_type,
                tax_office: this._tax_office,
                tax_number: this._tax_number,
                district: this._district,
                city: this._city,
                address: this._address,
                phone: this._phone,
                fax: this._fax,
                is_abroad: this._is_abroad,
                archived: this._archived,
                iban: this._iban,
                account_type: this._account_type
            },
            relationships: {
                contact_people: {
                    data: this._users.map(u => {
                      return {
                          id: null,
                          type: "contact_people",
                          attributes: {
                              name: u.name,
                              email: u.email,
                              phone: u.phone,
                              notes: u.notes,
                          }
                      }
                    })
                }
            }
        }
    }
}

module.exports = Contact;