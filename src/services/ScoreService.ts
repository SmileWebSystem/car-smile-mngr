import { SSL_OP_NO_COMPRESSION } from 'constants';
import debugLib from 'debug';
import ScoresDto from '../models/ScoresDto';

const debug = debugLib('bdb:ScoreService');

export default class ScoreService {

    /**
     *
     * @param infoCar Realiza analizis del vehiculo
     */
    public static carInformationAnalysis(infoCar: any) {

        const scores: ScoresDto = new ScoresDto();
        scores.scoreOwners = this.calculateOwners();
        scores.scoreSinister = this.calculateSinister();
        scores.scoreOpenTrafficTickets = this.calculateOpenTrafficTickets();
        scores.scoreCloseTrafficTickets = this.calculateCloseTrafficTickets();
        scores.socoreTotal = 100; // TODO: calcular

        return scores;

    }

    /**
     * Realiza el calculo de puntaje para los dueños
     * @returns
     */
    public static calculateOwners(): number {
        // TODO:
        return -4.5;
    }

    /**
     *
     * @returns
     */
    public static calculateSinister(): number {
        // TODO:
        return -4.5;
    }

    /**
     *
     * @returns
     */
    public static calculateOpenTrafficTickets(): number {
        // TODO:
        return -4.5;
    }

    /**
     *
     * @returns
     */
    public static calculateCloseTrafficTickets(): number {
        // TODO:
        return -4.5;
    }

}
