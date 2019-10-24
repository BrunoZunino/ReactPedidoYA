const client = require('../client');
var bcrypt = require('bcrypt');

async function register (params, hash) {
  const query = await client.query(`INSERT INTO cliente (nombre, apellido, correo, contraseña, pais) VALUES ('${params.name}', '${params.lastName}', '${params.email}', '${hash}', '${params.country}' );`);
  return query;
}


function login (params) {
  return new Promise(resolve => {
    setTimeout(() => {
      client.query(`SELECT correo, contraseña FROM cliente where correo = '${params.email}'`, (err, response) => {
        console.log(response);
      
          if (response.rows.length > 0) {     
            let pass = response.rows[0].contraseña;     
            if (!bcrypt.compareSync(params.pass, pass)) {
              // TODO: Retornar un error
              console.log('login error');
              resolve(false) ;
            }
            console.log('OK');
            resolve(true) ;
          } 
          console.log('mail error');
          resolve(false);
      });
    }, 500);
  });
}

module.exports = {
  login,
  register
};