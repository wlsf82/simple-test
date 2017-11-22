const BaseService = require("../BaseService");

class ExpectationService extends BaseService {
    fetchById(id) {
        return this.repository.fetchRecordById(id);
    }
}

module.exports = ExpectationService;
