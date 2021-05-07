var mysql = require('mysql');
const psw = require('../../password');

var mysql_parameters = require('../config/mysql.config'); 
var connection = mysql.createConnection(mysql_parameters);

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