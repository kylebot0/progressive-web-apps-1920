const fetch = require('node-fetch');
const requestOptions = {
    method: "GET",
    redirect: "follow"
};


function getLaunches(req, res) {
    fetch(`https://api.spacexdata.com/v3/launches`)
        .then(res => res.json())
        .then(body => {
            res.render('overview', {
                title: 'Launches',
                launches: body
            });
        })
}

function getSingleLaunch(req, res) {
    fetch(`https://api.spacexdata.com/v3/launches/${req.params.id}`)
        .then(res => res.json())
        .then(body => {
            res.render('./singles/launch', {
                title: "",
                launch: body
            });
        })
}

function getShips(req, res) {
    fetch(`https://api.spacexdata.com/v3/ships`)
        .then(res => res.json())
        .then(body => {
            res.render('ships', {
                title: 'Ships',
                launches: body
            });
        })
}

function getCapsules(req, res) {
    fetch(`https://api.spacexdata.com/v3/capsules`)
        .then(res => res.json())
        .then(body => {
            res.render('capsules', {
                title: 'Capsules',
                launches: body
            });
        })
}

function getRockets(req, res) {
    fetch(`https://api.spacexdata.com/v3/rockets`)
        .then(res => res.json())
        .then(body => {
            res.render('rocket', {
                title: 'Rockets',
                launches: body
            });
        })
}



module.exports = {
    getLaunches,
    getShips,
    getCapsules,
    getRockets,
    getSingleLaunch,
}