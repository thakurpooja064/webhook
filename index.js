const jwt = require('jsonwebtoken');

const test = function (body) {
    let accessToken = "YOUR ACCESS TOKEN";
    let decodedData = jwt.verify(body.data, accessToken);
    console.log( decodedData)
};  


test(JSON.parse(`{"data":"DATA_RECEIVED_ENCRYPTED_FORM"}`))
