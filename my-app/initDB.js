async function init(client, cb) {
  Promise.all([
    await crearCosas(client),
    await crearCategorias(client),
    await unirCosasCategorias(client),
  ]).then(cb());
}

async function crearCosas(client) {
  await client.query(`drop table if exists cosas cascade;`);
  await client.query(`create table cosas (
                      id serial, 
                      nombre varchar(255) not null, 
                      primary key (id));`);
  
  for(let i = 0; i < 100; i++){
    await client.query(`insert into cosas (nombre) values ('cosa${i}');`);
  }
  return await client.query('select * from cosas;');
}

async function crearCategorias(client) {
  await client.query(`drop table if exists categorias cascade;`);
  await client.query(`create table categorias (
                      id serial, 
                      categoria varchar(255) not null, 
                      primary key (id));`);

  for(let i = 0; i < 10; i++){
    await client.query(`insert into categorias (categoria) values ('categoria${i}');`);
  }
  return await client.query('select * from categorias;');
}

async function unirCosasCategorias(client) {
  await client.query(`drop table if exists cosas_categorias;`);
  await client.query(`create table cosas_categorias(
                      cosa_id int references cosas(id) on delete cascade on update cascade,
                      categoria_id int references categorias(id) on delete cascade on update cascade);`);

  for(let i = 0; i < 100; i ++){
    let cosa_id = Math.ceil(Math.random() * 100);
    let categoria_id = Math.ceil(Math.random() * 10);
    await client.query(`insert into cosas_categorias (cosa_id, categoria_id) values ('${cosa_id}', '${categoria_id}');`)
  }
  return await client.query('select * from cosas_categorias;');
}

module.exports = (client, cb) => init(client, cb);