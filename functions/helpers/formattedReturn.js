module.exports = (statusCode, body) => {
    return {  
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        statusCode: 200,
        body: JSON.stringify(body)
      };

    };
