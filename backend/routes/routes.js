const fs = require('fs');
const forumdb = require('../forumdb.js')

function setupRoutes(app, dbconn) {
    queries = forumdb.loadQueries();

    app.get("/", async (req, res) => {
        const q = queries['query_top_level_categories'];
        dbconn.query(q, (err, results) => {
            if (err) {
                return console.log(err.message);
            }
            console.log(results);
            res.json(results);
        });
    });

    app.get("/category/:categoryid", async (req, res) => {
        const q1 = queries['query_subcategories'];
        const q2 = queries['query_category_threads'];
        const category = req.params.categoryid;
        dbconn.query(q1+q2, [category, category], (err, results) => {
            if (err) {
                return console.log(err.message);
            }
            var result = {};
            result["categories"] = results[0];
            result["threads"] = results[1];
            console.log(result);
            res.json(result);
        });
    });
    console.log('Routes set up');
}

module.exports = setupRoutes;