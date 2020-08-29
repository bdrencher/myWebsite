module.exports = {
    getDetails: getDetails,
    getTechData: getTechData
}

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


function getDetails(callback) {
    const query = 'SELECT p.name, p.description, l.github, l.url FROM projects p INNER JOIN links l ON l.project_id = p.project_id';

    pool.query(query, null, (err, res) => {
        if (err || res == null) {
            console.log(err);
            callback("There was an error getting project details from the database", null);
        } else {
            callback(null, res.rows);
        }
    });
}

function getTechData(callback) {
    const query = 'SELECT p.name, t.name FROM projects p INNER JOIN project_tech_map ptm ON p.project_id = ptm.project_id INNER JOIN technologies t ON ptm.tech_id = t.tech_id;';

    pool.query(query, null, (err, res) => {
        if (err || res == null) {
            console.log(err);
            callback("There was an error getting the project tech details", null);
        } else {
            callback(null, res);
        }
    });
}
