import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ActionService, ExpectationService, ProjectService, StepService, TestService } from "./client-api";

const apiUri = "http://localhost:5050/api";
const apiClient = axios;
const actionService = new ActionService({ apiClient, apiUri, name: "actions" });
const expectationService = new ExpectationService({ apiClient, apiUri, name: "expectations" });
const projectService = new ProjectService({ apiClient, apiUri, name: "projects" });
const stepService = new StepService({ apiClient, apiUri, name: "steps" });
const testService = new TestService({ apiClient, apiUri, name: "tests" });

Promise.all([
    actionService.fetchAll(),
    expectationService.fetchAll(),
    projectService.fetchAll(),
    stepService.fetchAll(),
    testService.fetchAll(),
]).then(data => {
    const store = [
        data.actions,
        data.expectations,
        data.projects,
        data.steps,
        data.tests,
    ];

    ReactDOM.render(<App store={store} />, document.getElementById("root"));
});

registerServiceWorker();
