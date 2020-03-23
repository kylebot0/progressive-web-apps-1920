const express = require('express');
const routing = require('./routes/routes')

const config = {
    port: 3000 || process.env.PORT
}
const app = express();

app.set('view engine', 'ejs')
    .set('views', 'src/views')
    .use(express.static('src/public'))
    .use(routing);

app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});