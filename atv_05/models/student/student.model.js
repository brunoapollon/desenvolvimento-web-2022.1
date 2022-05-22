var mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
  name: { type: String, required: true, max: 200 },
  course: { type: String, required: true, max: 200 },
  ira: { type: Number, required: true },
});

var StudentModel = mongoose.model("students", StudentSchema);

module.exports = StudentModel;
