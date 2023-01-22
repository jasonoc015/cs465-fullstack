const fs = require('fs');
const indexSidebar = JSON.parse(fs.readFileSync('./data/indexSidebar.json', 'utf8'));
const testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf8'));
const blog = JSON.parse(fs.readFileSync('./data/blog.json', 'utf8'));

const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', indexSidebar, testimonials, blog});
};

module.exports = {
    index
};