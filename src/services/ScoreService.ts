import debugLib from 'debug';
import ScoresDto from '../models/ScoresDto';

const debug = debugLib('bdb:ScoreService');

export default class ScoreService {

    /**
     *
     * @param infoCar Realiza analizis del vehiculo
     */
    public static carInformationAnalysis(infoCar: any) {

        const scoreOwners = this.calculateOwners();
        const scores = new ScoresDto(scoreOwners);

        return infoCar;

    }

    /**
     * Realiza el calculo de puntaje para los dueños
     * @returns
     */
    public static calculateOwners(): number {
        return -4.5;
    }

    /**
     * Retorna el listado de dueños que ha tenido el vehiculo
     * @param data
     */
    private static getOwners(data: any) {

        debug('getOwners: %j', this.getHistory(data));

        const history: any[] = this.getHistory(data);
        history.forEach((element) => {
            debug(element['NombreTomador']);
        });
    }

    private static getData(infoCar: any) {
        return infoCar['S:Envelope']['S:Body'][0]['ns0:ConsultaSisaResponse'][0]['Data'][0];
    }

    private static getHistory(infoCar: any) {
        return this.getData(infoCar)['historicoPolizasSisa'];
    }

}
