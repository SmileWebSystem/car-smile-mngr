import cookieParser from 'cookie-parser';
import express, { NextFunction, Response } from 'express'; // NOSONAR
import actuator from 'express-actuator';
import logger from 'morgan';
import path from 'path';
import config from './config';
import HealthController from './controllers/HealthController';
import CarController from './controllers/CarController';

const app = express();
app.disable('x-powered-by');

const apiPath = `/smile`;

app.use(logger('dev', { skip: (req, res) => req.path === '/management/health' }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));
app.use((_, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*'); // NOSONAR
    res.header('Access-Control-Allow-Headers', '*'); // NOSONAR
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // NOSONAR
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(apiPath, HealthController);
app.use(apiPath, CarController);
app.use(actuator({
    basePath: '/management',
    infoGitMode: 'full'
}));

export default app;
