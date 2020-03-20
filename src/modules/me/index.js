
module.exports = (Parasut) => {
   return {
       me: async()=>{
          return Parasut.api.api_call('GET', 'me', {}, true, false);
       }
   }
}