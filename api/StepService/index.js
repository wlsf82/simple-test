const BaseService = require("../BaseService");

class StepService extends BaseService {
    fetchById(id) {
        return this.repository.fetchRecordById(id);
    }
}

module.exports = StepService;
