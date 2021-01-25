const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // TODO: get courses
    const orders = await  table.select().firstPage();
    return formattedReturn(200, orders);

};