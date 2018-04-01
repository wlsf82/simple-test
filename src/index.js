import * as React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { ActionService, ExpectationService, ProjectService, StepService, TestService } from "./client-api";

import App from "./containers/App";
import HomePage from "./pages/Home";
import CreateTestPage from "./pages/CreateTest";

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
]).then(([
    actions,
    expectations,
    projects,
    steps,
    tests,
]) => {
    ReactDOM.render((
        <BrowserRouter
            basename={"/"}
        >
            <App>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/create-test" render={() => (
                        <CreateTestPage
                            actions={actions}
                            expectations={expectations}
                            projects={projects}
                            steps={steps}
                            tests={tests}
                        />
                    )}/>
                </Switch>
            </App>
        </BrowserRouter>
    ), document.getElementById("root"));
});

registerServiceWorker();
