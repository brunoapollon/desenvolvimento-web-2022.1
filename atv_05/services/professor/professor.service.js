const ProfessorModel = require("../../models/professor/professor.model");

class ProfessorService {
  static create(req, res) {
    ProfessorModel.create(req.body).then((student) => {
      res.status(201).json(student);
    });
  }

  static retrieve(req, res) {
    ProfessorModel.findById(req.params.id).then((student) => {
      res.status(200).json(student);
    });
  }

  static update(req, res) {
    ProfessorModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).then((student) => {
      res.status(200).json(student);
    });
  }

  static delete(req, res) {
    ProfessorModel.findByIdAndRemove(req.params.id).then((student) => {
      res.status(200).json(student);
    });
  }

  static list(req, res) {
    ProfessorModel.find().then((students) => {
      res.status(200).json(students);
    });
  }
}

module.exports = ProfessorService;
