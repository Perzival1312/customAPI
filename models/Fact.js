const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FactSchema = new Schema({
    
});
  
module.exports = mongoose.model('Fact', FactSchema);