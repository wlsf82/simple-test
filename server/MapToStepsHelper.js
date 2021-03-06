const StepsFactory = require("./StepsFactory");
const stepsFactory = new StepsFactory();
const GO_TO_URL = "Go to URL";
const ENTER_TEXT = "Enter text";
const CLEAR_TEXT_FIELD = "Clear text field";
const PRESS_KEY = "Press key";
const REFRESH_PAGE = "Refresh page";
const CLICK = "Click";
const EXPECT_TO_CONTAIN = "Expect to contain";
const EXPECT_NOT_TO_CONTAIN = "Expect not to contain";
const EXPECT_TO_EQUAL = "Expect to equal";
const EXPECT_NOT_TO_EQUAL = "Expect not to equal";
const EXPECT_COUNT_TO_BE = "Expect count to be";
const EXPECT_TO_BE_DISPLAYED = "Expect to be displayed";
const EXPECT_NOT_TO_BE_DISPLAYED = "Expect not to be displayed";
const EXPECT_TO_BE_PRESENT = "Expect to be present";
const EXPECT_NOT_TO_BE_PRESENT = "Expect not to be present";
const EXPECT_CURRENT_URL_TO_EQUAL = "Expect current URL to equal";
const EXPECT_ELEMENT_WITH_ATTRIBUTE_TO_CONTAIN_VALUE = "Expect element with attribute to contain value";
const EXPECT_ELEMENT_WITH_ATTRIBUTE_NOT_TO_CONTAIN_VALUE = "Expect element with attribute not to contain value";

class MapToStepsHelper {
    addSteps(testCase) {
        testCase.forEach((step) => {
            switch (step.description) {
                case GO_TO_URL:
                    stepsFactory.goToUrl(step.string);
                    break;
                case ENTER_TEXT:
                    stepsFactory.enterText(step.css_selector, step.string);
                    break;
                case CLEAR_TEXT_FIELD:
                    stepsFactory.clearTextField(step.css_selector);
                    break;
                case PRESS_KEY:
                    stepsFactory.pressKey(step.css_selector, step.key_code);
                    break;
                case REFRESH_PAGE:
                    stepsFactory.refresh();
                    break;
                case CLICK:
                    stepsFactory.click(step.css_selector);
                    break;
                case EXPECT_TO_CONTAIN:
                    stepsFactory.expectToContain(step.css_selector, step.string);
                    break;
                case EXPECT_NOT_TO_CONTAIN:
                    stepsFactory.expectNotToContain(step.css_selector, step.string);
                    break;
                case EXPECT_TO_EQUAL:
                    stepsFactory.expectToEqual(step.css_selector, step.string);
                    break;
                case EXPECT_NOT_TO_EQUAL:
                    stepsFactory.expectNotToEqual(step.css_selector, step.string);
                    break;
                case EXPECT_COUNT_TO_BE:
                    stepsFactory.expectCountToBe(step.css_selector, step.number);
                    break;
                case EXPECT_TO_BE_DISPLAYED:
                    stepsFactory.expectToBeDisplayed(step.css_selector);
                    break;
                case EXPECT_NOT_TO_BE_DISPLAYED:
                    stepsFactory.expectNotToBeDisplayed(step.css_selector);
                    break;
                case EXPECT_TO_BE_PRESENT:
                    stepsFactory.expectToBePresent(step.css_selector);
                    break;
                case EXPECT_NOT_TO_BE_PRESENT:
                    stepsFactory.expectNotToBePresent(step.css_selector);
                    break;
                case EXPECT_CURRENT_URL_TO_EQUAL:
                    stepsFactory.expectCurrentUrlToEqual(step.expectedUrl);
                    break;
                case EXPECT_ELEMENT_WITH_ATTRIBUTE_TO_CONTAIN_VALUE:
                    stepsFactory.expectElementWithAttributeToContainValue(step.css_selector, step.attribute, step.value);
                    break;
                case EXPECT_ELEMENT_WITH_ATTRIBUTE_NOT_TO_CONTAIN_VALUE:
                    stepsFactory.expectElementWithAttributeNotToContainValue(step.css_selector, step.attribute, step.value);
                    break;
            }
        });
    }
}

module.exports = MapToStepsHelper;
