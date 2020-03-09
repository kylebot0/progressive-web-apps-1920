const fetch = require('node-fetch');


function getPosts(req, res) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(body => {
            res.render('posts', {
                title: 'Posts', // We use this for the page title, see views/partials/head.ejs
                postData: body
            });
        })
}

function getPost(req, res) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            // Render the page using the 'posts' view and our body data
            res.render('post', {
                title: 'Posts', // We use this for the page title, see views/partials/head.ejs
                postData: body
            });
        })
}


module.exports = {
    getPosts,
    getPost
}