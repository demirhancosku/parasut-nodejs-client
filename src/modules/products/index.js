
module.exports = (Parasut) => {
   return {
       list: async()=>{
          return Parasut.api.api_call('GET', 'products');
       },
       find: async(id)=>{
           return Parasut.api.api_call('GET', `products/${id}`);
       },
       create: async(params)=>{
           return Parasut.api.api_call('POST', 'products', {
               data: params
           });
       },
       edit: async(params)=>{
        return Parasut.api.api_call('PUT', `products/${params.id}`, {
            data: params
        })
    }
   }
}