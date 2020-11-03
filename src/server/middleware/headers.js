import bodyParser from 'body-parser';

export default (app) => {
    app.disable('x-powered-by');

    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Id-Token, Access-Control-Allow-Credentials');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Max-Age', 86400);

        next();
    });
};
