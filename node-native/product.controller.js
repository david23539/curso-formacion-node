'use strict'


function getListProduct(req, res) {
    const lengthArray = req.params
    const array = new Array(lengthArray.numbersProducts);
    for (let i = 0; i <= lengthArray.numbersProducts; i++) {
        array.push(Math.random() * 100);
    }
    res.send({
        "lista": array.toString()
    })
}

function getAll(req, res, cb) {
    const variable1 = 'hola';
    cb(variable1);
}


module.exports = {
    getListProduct,
    getAll
}
