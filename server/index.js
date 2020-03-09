const express = require('express');

const config = {
    port: 3000
}

const app = express();
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('public'))
    .use(require('./routes/posts'));

app.listen(config.port, function() {
    console.log(`Application started on port: ${config.port}`);
});