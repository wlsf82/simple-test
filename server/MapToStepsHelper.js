const StepsFactory = require("./StepsFactory");
const stepsFactory = new StepsFactory();

class MapToStepsHelper {
    addSteps(testCase) {
        testCase.forEach((step) => {
            switch (step.action) {
                case "Go to URL":
                    stepsFactory.goToUrl(step.url);
                    break;
                case "Enter text":
                    stepsFactory.enterText(step.css_selector, step.text);
                    break;
                case "Press key":
                    stepsFactory.pressKey(step.css_selector, step.key);
                    break;
                case "Click":
                    stepsFactory.click(step.css_selector);
                    break;
                case "Expect to contain":
                    stepsFactory.expectToContain(step.css_selector, step.text);
                    break;
            }
        });
    }
}

module.exports = MapToStepsHelper;
