import config from '../config';
import debugLib from 'debug';

const soapRequest = require('easy-soap-request');
const debug = debugLib('bdb:FasecoldaService');

export default class FasecoldaService {

    public static async test() {



        this.getSoapService().then((response) => {
            const { headers, body, statusCode } = response;
            debug('StatusCode %j', statusCode);

        }).catch((error) => {
            debug('Error %j', error);
        });




    }

    /**
     * Consume el servicio SOAP
     * @returns xml de la respuesta
     */
    private static async getSoapService() {
        const sampleHeaders = {
            'Content-Type': 'text/xml',
        };

        const leo = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.segurosbolivar.com/simon/fasecolda/1.0">
        <soapenv:Header/>
        <soapenv:Body>
           <ns:ConsultaSisaRequest>
              <DataHeader>
                 <modulo>2</modulo>
                 <proceso>2000</proceso>
                 <subProceso>240</subProceso>
                 <codCia>3</codCia>
                 <codSecc>1</codSecc>
                 <codProducto>250</codProducto>
                 <!--Optional:-->
                 <subProducto>1</subProducto>
                 <codUrs>51938035</codUrs>
                 <entidadColocadora>0</entidadColocadora>
                 <!--Optional:-->
                 <canal>1</canal>
                 <sistemaOrigen>104</sistemaOrigen>
                 <pais>1</pais>
                 <direccionIp>127.0.0.1</direccionIp>
                 <versionServicio>1.0</versionServicio>
                 <!--Optional:-->
                 
              </DataHeader>
              <!--Optional:-->
              <placa>REK290</placa>
              <!--Optional:-->         
           </ns:ConsultaSisaRequest>
        </soapenv:Body>
     </soapenv:Envelope>`;
        const leo1 = config.bodyRequest;

        debug('request %j', leo);
        debug('request2: %j', config.bodyRequest);

        const { response } = await soapRequest({ url: config.endPoint, headers: sampleHeaders, xml: leo1 });
        return response;
    }




}
