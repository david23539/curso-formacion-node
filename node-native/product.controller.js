'use strict'


function getAllProduct(req, res) {
    const lengthArray = req.params
    const array = new Array(lengthArray.numbersProducts);
    for (let i = 0; i <= lengthArray.numbersProducts; i++) {
        array.push(Math.random() * 100);
    }
    res.send({
        "lista": array.toString()
    })
}


module.exports = {
    getAllProduct
}
