const client = require('../client');

async function register (params, hash) {
  const query = await client.query(`INSERT INTO cliente (nombre, apellido, correo, contraseña, pais) VALUES ('${params.name}, ${params.lastName}, ${params.email}, ${params.password}, ${params.country}, ${hash}');`);
  return query;
}

async function login (params) {
  const query = await client.query(`SELECT correo, contraseña FROM cliente where correo = '${params.email}'`);

    try{
      if(response.rows.length > 0){
        let pass = response.rows[0].contraseña;
        if(bcrypt.compareSync(params.pass, pass)){
          // TODO: Login valido
          return true;
        }else{
          // TODO: Retornar un error
          throw 'login error'
        }
      }else{
        // TODO: retornar un error
        throw 'mail no existe'
      }
    }catch(err){
      res.status(500).send(err);
    }
}

module.exports = {
  login,
  register
};