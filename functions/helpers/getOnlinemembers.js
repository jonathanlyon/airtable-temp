const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {

   
    table.select({
        // Selecting the first 3 records in Grid view:
        //maxRecords: 3,
        view: "LoggedIn"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('ID'));
            return formattedReturn(200, record.get('ID'));
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });


    // try {
    //     const courses = await table.select().firstPage();
    //     const formattedCourses = courses.map((course) => ({
    //         id: course.id,
    //         ...course.fields,
    //     }));
    //     return formattedReturn(200, formattedCourses);
    // } 
    // catch(err) {
    //     console.error(err);
    //     return formattedReturn(500, { msg: 'Something went wrong' });
    // }
};
