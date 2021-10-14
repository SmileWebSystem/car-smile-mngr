import debugLib from 'debug';
import ScoreService from '../services/ScoreService';
import SoapService from './SoapService';
import FormatUtil from '../utilities/FormatUtil';

const debug = debugLib('bdb:FasecoldaService');

export default class CarService {

    /**
     * Realiza validacioon del vehiculo a partir de la placa
     * @param placa
     */
    public static async validateCar(placa: string) {
        debug('placa: %j', placa);
        let infoCar;

        await SoapService.getSoapService(placa).then(async (response) => {
            const { headers, body, statusCode } = response;

            if (statusCode === 200) {
                const resultJson = await FormatUtil.xmlToJson(body);

                infoCar = ScoreService.carInformationAnalysis(resultJson);

            }

        }).catch((error) => {
            debug('Error %j', error);
        });

        debug('validateCar %j', infoCar);
        return infoCar;
    }
}
