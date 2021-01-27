const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getCourses');
const getOnlinemembers = require('./helpers/getOnlinemembers');
const getMembers = require('./helpers/getMembers');
const createCourse = require('./helpers/createCourse');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');
const getRecords = require('./helpers/getRecords');
const getWebhook = require('./helpers/getWebhook');
exports.handler = async (event) => {
    // TODO: call appropriate helper function based on HTTP method
     if(event.httpMethod = 'PUT') {
         return await getWebhook(event);
     } else {
         return formattedReturn(405, {});
     }
 
};