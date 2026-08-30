const path = require('path');
const fsp = require('fs').promises;
const { DATA_DIR } = require('../config');

class JsonModel {
    static async readJSON(filename) {
        const filePath = path.join(DATA_DIR, filename);
        const raw = await fsp.readFile(filePath, 'utf8');
        return JSON.parse(raw);
    }

    static async writeJSON(filename, data) {
        const filePath = path.join(DATA_DIR, filename);
        await fsp.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    }

    static async appendToList(filename, entry) {
        let list = [];
        try {
            list = await this.readJSON(filename);
        } catch (_) {
            list = [];
        }
        list.push(entry);
        await this.writeJSON(filename, list);
    }
}

module.exports = JsonModel;
