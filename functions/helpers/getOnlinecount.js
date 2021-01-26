const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async function(event) {
  const members = await table.select({
      view: 'LoggedIn'
    })
    .all();
    return formattedReturn(200, {onlineMembers: members.length});
};
