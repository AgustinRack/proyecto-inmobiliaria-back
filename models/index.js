const Users = require("./Users");
const Visits = require("./Visits");
const Properties = require("./Properties");
const Categories = require("./Categories");
const Favorites = require("./Favorites");

Users.hasMany(Favorites);
Favorites.belongsTo(Users);

Users.hasMany(Visits);
Visits.belongsTo(Users);

Properties.hasMany(Visits);
Visits.belongsTo(Properties);

Properties.hasMany(Favorites);
Favorites.belongsTo(Properties);

Categories.hasMany(Properties);
Properties.belongsTo(Categories);

module.exports = { Users, Visits, Properties, Categories, Favorites };
