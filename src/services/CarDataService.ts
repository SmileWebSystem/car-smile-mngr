import debugLib from 'debug';
import CarOwners from '../models/CarOwners';

const debug = debugLib('bdb:ScoreService');

/**
 * Servicio encargado de obtener la informacion detallada del vehiculo
 */
export default class CarDataService {

    /**
     * Retorna el listado de dueños que ha tenido el vehiculo
     * @param data
     */
    public static getOwners(data: any) {
        const owners: CarOwners[] = [];

        const history: any[] = this.getHistory(data);
        history.forEach((element) => {
            owners.push(new CarOwners(element['NombreTomador']));
        });

        return owners;
    }

    private static getData(infoCar: any) {
        return infoCar['S:Envelope']['S:Body'][0]['ns0:ConsultaSisaResponse'][0]['Data'][0];
    }

    private static getHistory(infoCar: any) {
        return this.getData(infoCar)['historicoPolizasSisa'];
    }

}
