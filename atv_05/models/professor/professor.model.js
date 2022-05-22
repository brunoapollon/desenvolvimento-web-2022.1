var mongoose = require("mongoose");

var ProfessorSchema = mongoose.Schema({
  name: { type: String, required: true, max: 200 },
  university: { type: String, required: true, max: 200 },
  degree: { type: String, required: true, max: 200 },
});

var ProfessorModel = mongoose.model("professors", ProfessorSchema);

module.exports = ProfessorModel;
