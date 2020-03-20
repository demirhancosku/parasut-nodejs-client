module.exports = (Parasut) => {
    return {
        check: async (tax_number) => {
            return Parasut.api.api_call('GET', 'e_invoice_inboxes', {
                'filter[vkn]': tax_number
            });
        },
        createEInvoice: async (params) => {
            return Parasut.api.api_call('POST', 'e_invoices', {
                data: params
            });
        },
        checkEInvoice: async (id) => {
            return Parasut.api.api_call('GET', 'e_invoices/'+id);
        },
        pdfEInvoice: async (id) => {
            return Parasut.api.api_call('GET', 'e_invoices/'+id+'/pdf');
        },
        createEArchive: async (params) => {
            return Parasut.api.api_call('POST', 'e_archives', {
                data: params
            });
        },
        checkEArchive: async (id) => {
            return Parasut.api.api_call('GET', 'e_archives/'+id);
        },
        pdfEArchive: async (id) => {
            return Parasut.api.api_call('GET', 'e_archives/'+id+'/pdf');
        },
        trackById: async (id) => {
            return Parasut.api.api_call('GET', 'trackable_jobs/'+id);
        },
    }
}