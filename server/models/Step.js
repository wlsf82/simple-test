const assert = require("assert");

class Step {
    constructor(properties = {}) {
        assert.ok(properties, "properties<object> are required");

        this.id = null; // <number>
        this.description = null; // <string>
        this.css_selector = null; // <string>
        this.string = null; // <string>
        this.expectation = null; // <string>
        this.key_code = null; // <number>

        // Only allow existing property names to be modified
        const validProperties = {};
        Object.getOwnPropertyNames(properties).forEach((prop) => {
            if (Object.getOwnPropertyNames(this).indexOf(prop) !== -1) {
                validProperties[prop] = properties[prop];
            }
        });

        Object.assign(this, validProperties);

        assert.ok(this.id, "properties.id<number> is required");
        assert.ok(this.description, "properties.description<string> is required");
    }
}

module.exports = Step;
