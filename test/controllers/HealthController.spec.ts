import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import config from '../../src/config';

chai.use(chaiHttp);
chai.should();

describe('HealthController Test', () => {

    before(function () {
    });

    it('health OK', async () => {
        const response = await chai.request(app).get(config.apiPath + '/health');
        response.should.have.status(200);
    });
});