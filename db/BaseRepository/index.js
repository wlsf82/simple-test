const assert = require("assert");

class BaseRepository {
    hasRecord(object) {
        assert.ok(typeof object === "object", "object<object> is required");

        return this.knex(this.name)
            .where(object)
            .select("id")
            .then(rows => Boolean(rows.length));
    }

    fetchAll() {
        return this.knex(this.name)
            .select("*")
            .then(rows => rows.map(row => this.model.toRecord(row)));
    }

    fetchRecordById(recordId) {
        assert.ok(typeof recordId === "number", "recordId<number> is required");

        return this.knex(this.name)
            .where("id", recordId)
            .select()
            .first()
            .then(row => this.model.toRecord(row));
    }

    fetchRecordsBy(object) {
        assert.ok(typeof object === "object", "object<object> is required");

        return this.knex(this.name)
            .where(object)
            .then(rows => rows.map(row => this.model.toRecord(row)));
    }

    size() {
        return this.knex(this.name)
            .count("id as SIZE")
            .then(total => total[0].SIZE);
    }
}

module.exports = BaseRepository;
