const fs = require('fs');
const foods = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways', foods});
};

module.exports = {
    meals
};