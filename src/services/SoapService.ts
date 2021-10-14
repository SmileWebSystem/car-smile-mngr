import config from '../config';
import debugLib from 'debug';

const soapRequest = require('easy-soap-request');
const { base64encode, base64decode } = require('nodejs-base64');

const debug = debugLib('bdb:SoapService');

export default class SoapService {
    /**
     * Consume el servicio SOAP
     * El request se encuentra codificado y dividido en dos partes
     * @param placa
     * @returns
     */
    public static async getSoapService(placa: string) {
        const sampleHeaders = {
            'Content-Type': 'text/xml',
        };
        const request1 = 'PHNvYXBlbnY6RW52ZWxvcGUgeG1sbnM6c29hcGVudj0iaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS8iIHhtbG5zOm5zPSJodHRwOi8vd3d3LnNlZ3Vyb3Nib2xpdmFyLmNvbS9zaW1vbi9mYXNlY29sZGEvMS4wIj4KICAgPHNvYXBlbnY6SGVhZGVyLz4KICAgPHNvYXBlbnY6Qm9keT4KICAgICAgPG5zOkNvbnN1bHRhU2lzYVJlcXVlc3Q+CiAgICAgICAgIDxEYXRhSGVhZGVyPgogICAgICAgICAgICA8bW9kdWxvPjI8L21vZHVsbz4KICAgICAgICAgICAgPHByb2Nlc28+MjAwMDwvcHJvY2Vzbz4KICAgICAgICAgICAgPHN1YlByb2Nlc28+MjQwPC9zdWJQcm9jZXNvPgogICAgICAgICAgICA8Y29kQ2lhPjM8L2NvZENpYT4KICAgICAgICAgICAgPGNvZFNlY2M+MTwvY29kU2VjYz4KICAgICAgICAgICAgPGNvZFByb2R1Y3RvPjI1MDwvY29kUHJvZHVjdG8+CiAgICAgICAgICAgIDwhLS1PcHRpb25hbDotLT4KICAgICAgICAgICAgPHN1YlByb2R1Y3RvPjE8L3N1YlByb2R1Y3RvPgogICAgICAgICAgICA8Y29kVXJzPjUxOTM4MDM1PC9jb2RVcnM+CiAgICAgICAgICAgIDxlbnRpZGFkQ29sb2NhZG9yYT4wPC9lbnRpZGFkQ29sb2NhZG9yYT4KICAgICAgICAgICAgPCEtLU9wdGlvbmFsOi0tPgogICAgICAgICAgICA8Y2FuYWw+MTwvY2FuYWw+CiAgICAgICAgICAgIDxzaXN0ZW1hT3JpZ2VuPjEwNDwvc2lzdGVtYU9yaWdlbj4KICAgICAgICAgICAgPHBhaXM+MTwvcGFpcz4KICAgICAgICAgICAgPGRpcmVjY2lvbklwPjEyNy4wLjAuMTwvZGlyZWNjaW9uSXA+CiAgICAgICAgICAgIDx2ZXJzaW9uU2VydmljaW8+MS4wPC92ZXJzaW9uU2VydmljaW8+CiAgICAgICAgICAgIDwhLS1PcHRpb25hbDotLT4KICAgICAgICAgICAgCiAgICAgICAgIDwvRGF0YUhlYWRlcj4KICAgICAgICAgPCEtLU9wdGlvbmFsOi0tPgogICAgICAgICA8cGxhY2E+';
        const request2 = 'PC9wbGFjYT4KICAgICAgICAgPCEtLU9wdGlvbmFsOi0tPiAgICAgICAgIAogICAgICA8L25zOkNvbnN1bHRhU2lzYVJlcXVlc3Q+CiAgIDwvc29hcGVudjpCb2R5Pgo8L3NvYXBlbnY6RW52ZWxvcGU+';
        const xml1 = base64decode(request1);
        const xml2 = base64decode(request2);
        const request = xml1.concat(placa).concat(xml2);
        const { response } = await soapRequest({ url: config.endPoint, headers: sampleHeaders, xml: request });

        debug('getSoapService %j', response);
        return response;
    }
}
