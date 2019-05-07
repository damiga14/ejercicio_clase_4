var db = require('../db/index.js')

function getFromDb(req, res)
{
    db.query("SELECT * FROM clientes;", function (err, result) {
    if (err) throw err;

    res.status(200).json(result)
    });
}

function postToDb(req, res)
{
    var {nombre, direccion} = req.body;

    db.query(`INSERT INTO clientes (nombre, direccion) VALUES ("${nombre}", "${direccion}")`,function(err, response)
    {
        if(err) throw err;
    })

    res.send("Insertado")
}

function deleteFromDb(req, res)
{
    var {nombre} = req.body;

    db.query(`DELETE FROM clientes WHERE nombre = "${nombre}"`, function(err, response)
    {
        if(err) throw err;
    })

    res.send("Eliminado")
}

function updateFromDb(req, res)
{
    let {nombreNuevo, nombreViejo} = req.body;

    db.query(`UPDATE clientes SET nombre = "${nombreNuevo}" WHERE nombre = "${nombreViejo}"`, function(err, response)
    {
        if(err) throw err;
    })

    res.send("Actualizado")
}


module.exports = {getFromDb, postToDb, deleteFromDb, updateFromDb}