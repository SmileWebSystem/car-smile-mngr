const dotenv = require('dotenv');
dotenv.config();

export default {
    apiPath: process.env.API_PATH || '',
    port: process.env.PORT || '9001',
    endPoint: process.env.END_POINT || '',
    bodyRequest: process.env.BODY_REQUEST || ''
};
