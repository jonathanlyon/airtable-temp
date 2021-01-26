const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getCourses');
const getOnlinemembers = require('./helpers/getOnlinemembers');
const createCourse = require('./helpers/createCourse');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');
const getRecords = require('./helpers/getRecords');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
     if(event.httpMethod = 'Get') {
         return await getOnlinemembers(event);
     } else {
         return formattedReturn(405, {});
     }
 
};