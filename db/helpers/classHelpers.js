const assert = require("assert");

function createValidPropertiesObject (properties) {
    assert.ok(properties, "properties<object> is required");

    const validProperties = {};

    Object.getOwnPropertyNames(properties).forEach((prop) => {
        if (Object.getOwnPropertyNames(this).indexOf(prop) !== -1) {
            validProperties[prop] = properties[prop];
        }
    });

    return validProperties;
}

module.exports = {
    createValidPropertiesObject,
}
