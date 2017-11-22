const path = require("path");
const paths = require("../config/paths");
const knex = require("knex")({
    dialect: "sqlite3",
    connection: {
        filename: path.resolve(paths.db, "simple-test.db"),
    }
});
const {
    ActionModel,
    ExpectationModel,
    ProjectModel,
    StepModel,
    TestModel,

    ActionRepository,
    ExpectationRepository,
    ProjectRepository,
    StepRepository,
    TestRepository,
} = require(paths.db);
const {
    ActionService,
    ExpectationService,
    ProjectService,
    StepService,
    TestService,
} = require(paths.api);

const actionModel = new ActionModel();
const expectationModel = new ExpectationModel();
const projectModel = new ProjectModel();
const stepModel = new StepModel();
const testModel = new TestModel();

const actionRepository = new ActionRepository({ knex, name: "action", model: actionModel });
const expectationRepository = new ExpectationRepository({ knex, name: "expectation", model: expectationModel });
const projectRepository = new ProjectRepository({ knex, name: "project", model: projectModel });
const stepRepository = new StepRepository({ knex, name: "step", model: stepModel });
const testRepository = new TestRepository({ knex, name: "test", model: testModel });

const actionService = new ActionService({ repository: actionRepository });
const expectationService = new ExpectationService({ repository: expectationRepository });
const projectService = new ProjectService({ repository: projectRepository });
const stepService = new StepService({ repository: stepRepository });
const testService = new TestService({ repository: testRepository });

actionService.fetchAll().then(console.log);
expectationService.fetchById(1).then(console.log);
projectService.fetchById(1).then(console.log);
stepService.fetchById(1).then(console.log);
testService.fetchById(1).then(console.log);
