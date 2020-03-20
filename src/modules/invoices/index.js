module.exports = (Parasut) => {
    return {
        list: async () => {
            return Parasut.api.api_call('GET', 'sales_invoices');
        },
        find: async (id) => {
            return Parasut.api.api_call('GET', `sales_invoices/${id}`, {
                include: 'active_e_document'
            });
        },
        create: async (params) => {
            return Parasut.api.api_call('POST', 'sales_invoices', {
                data: params
            });
        },
        edit: async (params) => {
            return Parasut.api.api_call('PUT', `sales_invoices/${params.id}`, {
                data: params
            })
        },
        pay: async (invoice_id, params) => {
            return Parasut.api.api_call('POST', `sales_invoices/${invoice_id}/payments`, {
                data: params
            })
        },
        cancel: async (invoice_id) => {
            return Parasut.api.api_call('DELETE', `sales_invoices/${invoice_id}/cancel`, {
                data: params
            })
        },
        delete: async (invoice_id) => {
            return Parasut.api.api_call('DELETE', `sales_invoices/${invoice_id}`, {
                data: params
            })
        }
    }
}