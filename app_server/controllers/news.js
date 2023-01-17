const fs = require('fs');
const articles = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', articles});
};

module.exports = {
    news
};