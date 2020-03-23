const express = require('express');
const routing = require('./routes/routes')
const compression = require('compression')
const port = process.env.PORT || 3000
const app = express();

app.set('view engine', 'ejs')
    .set('views', 'src/views')
    .use(compression())
    .use((req, res, next) => {
        res.header('Cache-Control', 'max-age=2592000000');
        next();
    })
    .use(express.static('src/public'))
    .use(routing);

app.listen(port, function() {
    console.log(`Application started on port: ${port}`);
});