const fs = require('fs');
const availableRooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways', availableRooms});
};

module.exports = {
    rooms
};