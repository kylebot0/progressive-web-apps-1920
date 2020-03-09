const fetch = require('node-fetch');
const requestOptions = {
    method: "GET",
    redirect: "follow"
};


function getData(req, res) {
    fetch(`https://api.spacexdata.com/v3/launches`)
        .then(res => res.json())
        .then(body => {
            res.render('overview', {
                title: 'Launches', // We use this for the page title, see views/partials/head.ejs
                launches: body
            });
        })
}


function getPost(req, res) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            // Render the page using the 'posts' view and our body data
            res.render('post', {
                title: 'Launches', // We use this for the page title, see views/partials/head.ejs
                postData: body
            });
        })
}


module.exports = {
    getData,
    getPost
}