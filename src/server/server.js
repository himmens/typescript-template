const path = require('path');
const express = require('express');
import hot from './middleware/hot';

const app = express();
const compiler = hot(app);

app.get('/data', (req, res) => {
    res.json({ value: 'Hello from server!' });
});

// Hack for WebpackHtmlPlugin
// @see https://github.com/jantimon/html-webpack-plugin/issues/145
app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => { // eslint-disable-line consistent-return
        if (err) {
            return next(err);
        }

        res.set('Content-Type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
    console.error(error); // eslint-disable-line no-console

    res.status(401);
    res.json({ error: { message: error.message } });
});

app.listen(8080, () => {
    console.log('Listening at http://localhost:8080');
});
