const fs = require('fs');
const info = JSON.parse(fs.readFileSync('./data/info.json', 'utf8'));

const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways', info});
};

module.exports = {
    contact
};