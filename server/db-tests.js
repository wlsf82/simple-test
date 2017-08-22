const knex = require("knex")({
    dialect: "sqlite3",
    connection: {
        filename: "./db/simple-test.db"
    }
});
const Project = require("./models/Project");
const Test = require("./models/Test");
const Step = require("./models/Step");
const paths = require("../config/paths");
const fs = require("fs");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");
const path = require("path");

// Async DB functions
async function getStepsByTestId(testId) {
    return knex.select().from("step").where({
        "test_id": testId,
    }).then(steps => steps.map(_step => new Step(_step)));
}

async function getTestCasesByProjectId(projectId) {
    return knex.select().from("test").where({
        "project_id": projectId,
    }).then(testCases => testCases.map(_case => new Test(_case)));
}

async function getProjectById(projectId) {
    return knex.select().from("project").where({
        "id": projectId,
    }).then(rows => new Project(rows[0]));
}

async function createObj(projectId = 1, testId = 1) {
    let testObj = {};

    try {
        const { description } = await getProjectById(projectId);
        const testCases = await getTestCasesByProjectId(projectId);
        
        for (let i = 0; i < testCases.length; i++) {
            const testCase = testCases[i];
            testCase.steps = await getStepsByTestId(testCase.id);
        }
        testObj = Object.assign({}, {
            description,
            testCases,
            beforeAll: [],
            beforeEach: [],
            afterAll: [],
            afterEach: [],
        });
    }
    catch(e) {
        console.log(e);
    }

    return testObj;
}

// Helper functions, turns async funcs into promises
const removeDirPromiseFunc = (dirPath) => {
    return new Promise((resolve, reject) => {
        rimraf(dirPath, (err) => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve();
            console.log("The dir has been removed! Path: ", dirPath);
        });
    });
}

const createDirPromiseFunc = (dirPath, content) => {
    return new Promise((resolve, reject) => {
        mkdirp(dirPath, (err) => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve();
            console.log("The dir has been created! Path: ", dirPath);
        });
    });
}

const writeFilePromiseFunc = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(content), "utf8", (err) => {
            if (err) {
                reject(err);
                return;
            }
            
            resolve();
            console.log("The file has been created! Path: ", path);
        });
    });
}

// Main code, not sure what to call this.
async function main() {
    try {
        await removeDirPromiseFunc(paths.tmp); // Remove/empty dir
        await createDirPromiseFunc(paths.tmp); // Create dir
        const jsonData = await createObj(); // Create JSON object from DB data
        const testSuiteContent = fs.readFileSync(
            path.resolve(paths.server, "templates/test-suite.template.js"),
            "utf-8"
        );
        fs.writeFileSync( // Create JSON file
            path.resolve(paths.tmp, "some-file.js"), 
            testSuiteContent.replace(/{{templateData}}/, JSON.stringify(jsonData)), 
            "utf8"
        );
    }
    catch(e) {
        console.error(e);
    }
    finally {
        // Disconnect DB
        knex.destroy();
    }
};

main();
