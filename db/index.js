const ActionRepository = require("./ActionRepository");
const ActionModel = require("./ActionRepository/ActionModel");
const ExpectationRepository = require("./ExpectationRepository");
const ExpectationModel = require("./ExpectationRepository/ExpectationModel");
const ProjectRepository = require("./ProjectRepository");
const ProjectModel = require("./ProjectRepository/ProjectModel");
const StepRepository = require("./StepRepository");
const StepModel = require("./StepRepository/StepModel");
const TestRepository = require("./TestRepository");
const TestModel = require("./TestRepository/TestModel");

module.exports = {
    ActionRepository,
    ActionModel,
    ExpectationRepository,
    ExpectationModel,
    ProjectRepository,
    ProjectModel,
    StepRepository,
    StepModel,
    TestRepository,
    TestModel,
};
