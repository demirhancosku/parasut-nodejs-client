
module.exports = (Parasut) => {
   return {
       list: async()=>{
          return Parasut.api.api_call('GET', 'contacts');
       },
       find: async(id)=>{
           return Parasut.api.api_call('GET', `contacts/${id}`);
       },
       create: async(params)=>{
           return Parasut.api.api_call('POST', 'contacts', {
               data: params
           });
       },
       edit: async(params)=>{
        return Parasut.api.api_call('PUT', `contacts/${params.id}`, {
            data: params
        })
    }
   }
}