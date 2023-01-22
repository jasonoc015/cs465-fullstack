const fs = require('fs');
const rightAds = JSON.parse(fs.readFileSync('./data/rightAds.json', 'utf8'));
const leftAds = JSON.parse(fs.readFileSync('./data/leftAds.json', 'utf8'));
const aboutTop = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));


const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways', rightAds, leftAds, aboutTop});
};

module.exports = {
    about
};