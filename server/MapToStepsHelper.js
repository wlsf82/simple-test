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
                case "Clear text field":
                    stepsFactory.clearTextField(step.css_selector);
                    break;
                case "Press key":
                    stepsFactory.pressKey(step.css_selector, step.key);
                    break;
                case "Refresh page":
                    stepsFactory.refresh();
                    break;
                case "Click":
                    stepsFactory.click(step.css_selector);
                    break;
                case "Expect to contain":
                    stepsFactory.expectToContain(step.css_selector, step.text);
                    break;
                case "Expect not to contain":
                    stepsFactory.expectNotToContain(step.css_selector, step.text);
                    break;
                case "Expect to equal":
                    stepsFactory.expectToEqual(step.css_selector, step.text);
                    break;
                case "Expect not to equal":
                    stepsFactory.expectNotToEqual(step.css_selector, step.text);
                    break;
                case "Expect count to be":
                    stepsFactory.expectCountToBe(step.css_selector, step.number);
                    break;
                case "Expect to be displayed":
                    stepsFactory.expectToBeDisplayed(step.css_selector);
                    break;
                case "Expect not to be displayed":
                    stepsFactory.expectNotToBeDisplayed(step.css_selector);
                    break;
                case "Expect to be present":
                    stepsFactory.expectToBePresent(step.css_selector);
                    break;
                case "Expect not to be present":
                    stepsFactory.expectNotToBePresent(step.css_selector);
                    break;
            }
        });
    }
}

module.exports = MapToStepsHelper;
