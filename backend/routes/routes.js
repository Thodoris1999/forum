const fs = require('fs');
const forumdb = require('../forumdb.js')

function setupRoutes(app, dbconn) {
    queries = forumdb.loadQueries();

    app.get("/", async (req, res) => {
        q = queries['query_top_level_categories'];
        dbconn.query(q, (err, results) => {
            if (err) {
                return console.log(err.message);
            }
            console.log(results);
            res.json(results);
        });
    });
    console.log('Routes set up');
}

module.exports = setupRoutes;