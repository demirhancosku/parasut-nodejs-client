
module.exports = (Parasut) => {
   return {
       list: async(filter)=>{
          return Parasut.api.api_call('GET', 'item_categories', filter);
       },
       find: async(id)=>{
           return Parasut.api.api_call('GET', `item_categories/${id}`);
       },
       create: async(params)=>{
           return Parasut.api.api_call('POST', 'item_categories', {
               data: params
           });
       },
       edit: async(params)=>{
        return Parasut.api.api_call('PUT', `item_categories/${params.id}`, {
            data: params
        })
    }
   }
}