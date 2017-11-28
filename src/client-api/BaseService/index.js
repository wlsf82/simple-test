const assert = require("assert");

class BaseService {
    constructor({ apiClient, apiUri, name }) {
        assert.ok(apiClient, "apiClient is required");
        assert.ok(typeof name === "string", "name<string> is required");
        assert.ok(typeof apiUri === "string", "apiUri<string> is required");

        this.name = name;
        this.apiUri = apiUri;
        this.apiClient = apiClient;
    }

    fetchAll() {
        return this.apiClient
            .request(`${this.apiUri}/${this.name}`, {
                method: "GET",
            })
            .then(({ data }) => data);
    }

    fetchById(id) {
        assert.ok(typeof id === "number", "id<number> is required");

        return this.apiClient
            .request(`${this.apiUri}/${this.name}/${id}`, {
                method: "GET",
            })
            .then(({ data }) => data);
    }
}

module.exports = BaseService;
