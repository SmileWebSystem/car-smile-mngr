const dotenv = require('dotenv');
dotenv.config();

export default {
    apiPath: process.env.API_PATH || '',
    bodyRequest: process.env.BODY_REQUEST || '',
    endPoint: process.env.END_POINT || '',
    port: process.env.PORT || '9001',
};
