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

// call the packages we need
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5050;
const router = express.Router();

router.get("/", function(req, res) {
    res.json({ message: "hooray! welcome to our api!" });
});

// Actions
router.route("/actions")
    .get((req, res) => {
        return actionService.fetchAll().then((data) => {
            res.json(data);
        });
    });

router.route("/actions/:action_id")
    .get((req, res) => {
        const actionId = Number(req.params.action_id);

        return actionService.fetchById(actionId)
            .then((data) => {
                res.json(data);
            })
            .catch((e) => {
                console.log(e);

                res.json({ error: "doesn't exist" });
            });
    });

// Expectations
router.route("/expectations")
    .get((req, res) => {
        return expectationService.fetchAll().then((data) => {
            res.json(data);
        });
    });

router.route("/expectations/:expectation_id")
    .get((req, res) => {
        const expectationId = Number(req.params.expectation_id);

        return expectationService.fetchById(expectationId)
            .then((data) => {
                res.json(data);
            })
            .catch((e) => {
                console.log(e);

                res.json({ error: "doesn't exist" });
            });
    });

// Projects
router.route("/projects")
    .get((req, res) => {
        return projectService.fetchAll().then((data) => {
            res.json(data);
        });
    });

router.route("/projects/:project_id")
    .get((req, res) => {
        const projectId = Number(req.params.project_id);

        return projectService.fetchById(projectId)
            .then((data) => {
                res.json(data);
            })
            .catch((e) => {
                console.log(e);

                res.json({ error: "doesn't exist" });
            });
    });

// Steps
router.route("/steps")
    .get((req, res) => {
        return stepService.fetchAll().then((data) => {
            res.json(data);
        });
    });

router.route("/steps/:step_id")
    .get((req, res) => {
        const stepId = Number(req.params.step_id);

        return stepService.fetchById(stepId)
            .then((data) => {
                res.json(data);
            })
            .catch((e) => {
                console.log(e);

                res.json({ error: "doesn't exist" });
            });
    });

// Tests
router.route("/tests")
    .get((req, res) => {
        return testService.fetchAll().then((data) => {
            res.json(data);
        });
    });

router.route("/tests/:test_id")
    .get((req, res) => {
        const testId = Number(req.params.test_id);

        return testService.fetchById(testId)
            .then((data) => {
                res.json(data);
            })
            .catch((e) => {
                console.log(e);

                res.json({ error: "doesn't exist" });
            });
    });

app.use("/api", router);
app.listen(port);

console.log(`API on port ${port}`);
