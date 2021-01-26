const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async function(event) {
  const allRecords = [];
  const members = await table.select({
      view: 'All Members'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record);
        })
        fetchNextPage()
      }

    );

     const formattedMembers = allRecords.map((member) => ({
        id: member.id,
        ...member.fields,
    }));    
    return formattedReturn(200, formattedMembers);
};

