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
    db.query(`INSERT INTO clientes (nombre, direccion) VALUES ("${req.params.nombre}", "sin direccion")`, function(err, response)
    {
        if(err) throw err;

        res.send(200).json({mensaje:"Insertado"})
    })
}


function deleteFromDb(req, res)
{
    db.query('DELETE FROM clientes WHERE nombre = "Chuck"', function(err, response)
    {
        if(err) throw err;

        res.status(200).json({mensaje:'Chuck Eliminado'})
    })
}

function updateFromDb(req, res)
{
    db.query('UPDATE clientes SET nombre = "" WHERE nombre = ""', function(err, response)
    {
        if(err) throw err;

        res.status(200).json({mensaje:"Actualizado"})
    })
}


module.exports = {getFromDb, postToDb, deleteFromDb, updateFromDb}