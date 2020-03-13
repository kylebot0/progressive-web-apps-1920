const express = require('express');
const routing = require('./routes/routes')

const config = {
    port: 3000
}
const app = express();
const postsRouter = require('./routes/routes');

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('public'))
    .use(routing);

app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});