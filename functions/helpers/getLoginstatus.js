const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');

function toBoolean( o ) {
    if ( null !== o ) {
        let t = typeof o;
        if ( "undefined" !== typeof o ) {
            if ( "string" !== t ) return !!o;
            o = o.toLowerCase().trim();
            return "true" === o || "1" === o;
        }
    }
    return false;
}

module.exports = async (event) => {
    try{
    // TODO: update course
    const recordId = event.queryStringParameters.recordid;
    const online = event.queryStringParameters.online;
    const status = toBoolean(online);

    console.log(recordId);
    console.log(online);

    console.log('Convert param to bool',status);

    const updateCode = ({ id: `${recordId}`,fields:{"connected":status}});

    
    const updateArray = [];
    updateArray.push(updateCode);
    console.log(updateArray);

    const getWebhook = await table.update(updateArray);

    const members = await table.select({
        view: 'LoggedIn'
      })
      .all();

    const onlinememberCount = members.length;    
    //return formattedReturn(200, {msg:'updated ' + recordId + ' with ' + online});
    return formattedReturn(200, onlinememberCount);
    }
    catch(err) {
        console.error(err);
        return formattedReturn(500, { msg: 'err' });
    }

};
