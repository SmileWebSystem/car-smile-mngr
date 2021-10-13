import cookieParser from 'cookie-parser';
import express, { NextFunction, Response } from 'express'; // NOSONAR
import actuator from 'express-actuator';
import logger from 'morgan';
import path from 'path';
import config from './config';
import HealthController from './controllers/HealthController';

const app = express();
app.disable('x-powered-by');
const apiPath = config.apiPath;
const fullApiPathV1 = `${apiPath}/V2/Utilities/notification`;

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

app.use('/', HealthController);
app.use(actuator({
    basePath: '/management',
    infoGitMode: 'full'
}));

export default app;
