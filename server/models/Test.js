const assert = require("assert");

class Test {
    constructor(properties = {}) {
        assert.ok(properties, "properties<object> are required");

        this.id = null; // <number>
        this.description = null; // <string>

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

module.exports = Test;
