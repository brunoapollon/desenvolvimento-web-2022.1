var express = require("express");
var router = express.Router();
var professorService = require("../../services/professor/professor.service");

router.get("/list", function (req, res, next) {
  professorService.list(req, res);
});

router.post("/create", function (req, res, next) {
  professorService.create(req, res);
});

router.put("/update/:id", function (req, res, next) {
  professorService.update(req, res);
});

router.delete("/delete/:id", function (req, res, next) {
  professorService.delete(req, res);
});

router.get("/retrieve/:id", function (req, res, next) {
  professorService.retrieve(req, res);
});

module.exports = router;
