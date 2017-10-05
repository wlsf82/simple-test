const assert = require("assert");
const BaseRepository = require("../BaseRepository");

class ActionRepository extends BaseRepository {
    constructor({ knex, name, model }) {
        assert.ok(knex, "knex is required");
        assert.ok(name, "name<string> is required");
        assert.ok(model, "model is required");

        super();

        this.knex = knex;
        this.name = name;
        this.model = model;
    }
}

module.exports = ActionRepository;
