const dotenv = require('dotenv');
dotenv.config();

export default {
    apiPath: process.env.API_PATH || '/smile',
    bodyRequest: process.env.BODY_REQUEST || '',
    endPoint: process.env.END_POINT || '',
    port: process.env.PORT || '9001',
    useMock: process.env.USE_MOCK || true,
    useMockType: process.env.USE_MOCK || 'resp-ok-original-REK290.json'
};
