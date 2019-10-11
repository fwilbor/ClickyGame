var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ClickyGameSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
 
  
});

// This creates our model from the above schema, using mongoose's model method
const ClickyGame = mongoose.model("ClickyGame", ClickyGameSchema);

// Export the Article model
module.exports = ClickyGame;
