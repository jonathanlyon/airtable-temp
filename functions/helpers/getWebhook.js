const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: update course
    const recordId = event.queryStringParameters.recordid;
    const online = event.queryStringParameters.online;

    console.log(recordId);
    console.log(online);

    const updateCode = ({ id: `${recordId}`,fields:{"online":`${online}`}});
    
    const updateArray = [];
    updateArray.push(updateCode);
    console.log(updateArray);

    const getWebhook = await table.update(updateArray);
    //return formattedReturn(200, {msg:'updated ' + recordId + ' with ' + online});
    return formattedReturn(200, updateArray);

};

    

  