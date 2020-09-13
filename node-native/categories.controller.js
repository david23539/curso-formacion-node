function getAllCategories(req, res) {
    res.send('categoria 1');
}

function addCategory(req, res) {
    res.send({
        category: req.body
    });
}

function removeCategory(req, res) {
    res.status(302).send({
        category: req.body
    });
}

module.exports = {
    getAllCategories,
    addCategory,
    removeCategory
}