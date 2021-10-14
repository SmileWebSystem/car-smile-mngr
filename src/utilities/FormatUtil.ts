import debugLib from 'debug';

const xml2js = require('xml2js');
const debug = debugLib('bdb:FormatUtil');

export default class FormatUtil {

    /**
     * Convierte xml a Json
     * @param data
     * @returns
     */
    public static async xmlToJson(data: any) {
        let resultJson;
        await xml2js.parseStringPromise(data).then((result: string) => {
            resultJson = JSON.parse(JSON.stringify(result));
        })
            .catch((error: any) => {
                debug(error);
            });
        debug('xmlToJson: %j', resultJson);
        return resultJson;
    }
}
