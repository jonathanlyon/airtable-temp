const formattedReturn = require('./helpers/formattedReturn');
const getOnlinecount = require('./helpers/getOnlinecount');

exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
     if(event.httpMethod = 'Get') {
         return await getOnlinecount(event);
     } else {
         return formattedReturn(405, {});
     }
 
};