const express = require('express');
const routing = require('./routes/routes')

const port = process.env.PORT
const app = express();

app.set('view engine', 'ejs')
    .set('views', 'src/views')
    .use(express.static('src/public'))
    .use(routing);

app.listen(port, function() {
    console.log(`Application started on port: ${port}`);
});