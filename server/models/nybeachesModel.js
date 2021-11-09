const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Nybeach = new Schema({
    Prop_ID:{type: String},
    Name:{type: String, unique: true},
    Location:{type: String},
    Phone:{type: String},
    Surf:{type: String},
    Note:{type: String},
    Accessible:{type: String},
    Accessible_Notes:{type: String},
    Barbecue_Allowed:{type: String},
    Bathroom:{type: String},
    Bicycle_and_Skate_Path:{type: String},
    Boardwalk:{type: String},
    Concession_Stand:{type: String},
    Performance_Pavilion:{type: String},
    Mobile_Charging_Stations:{type: String},
    Directions:{type: String},
    lat:{type: String},
    lon:{type: String},
    Description:{type: String}
});

// const NYbeach = mongoose.model('NYbeach', Nybeach);
// module.exports = NYbeach;

module.exports = mongoose.model('Nybeach', Nybeach);