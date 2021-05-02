var mysql = require('mysql');
const psw = require('../../password');

/*
// PARAMETROS DE CONEXION DENTRO DEL SERVIDOR
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'usuarios',
    password: psw.password,
    database: 'usuarios_proyecto2'
});
*/

//Parametros de conexion local
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usuarios_proyecto2'
});

connection.connect();

const login = async (req, res) => {
    const { username, contrasena } = req.query;
    connection.query(`SELECT id_usuario, username FROM usuarios WHERE username='${username}' AND contrasena=SHA('${contrasena}')`, function (error, results, fields) {
        if (error) throw error;
        if(results.length > 0){
            const data = results[0];
            res.json({
                login: true,
                id_usuario: data.id_usuario,
                username: data.username
            });
        }else{
            res.json({
                login: false,
                id_usuario: null,
                username: username
            });
        }
    });
}

module.exports = {
    login
};