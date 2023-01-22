const fs = require('fs');
const articles = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
const latestNews = JSON.parse(fs.readFileSync('./data/latestNews.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', articles, latestNews, tips});
};

module.exports = {
    news
};