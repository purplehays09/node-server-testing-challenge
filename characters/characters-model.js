const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(character) {
  // 2- implement the code that makes the test pass
  const [id] = await db('characters').insert(hobbit)
  return db('characters').where({ id }).first()
}

async function update(id, changes) {
  await db('characters').update(changes).where({ id })
  return db('characters').where({ id }).first()
}

function remove(id) {
  return db('characters').where({ id }).delete()
}

function getAll() {
  return db('characters');
}

function findById(id) {
  return null;
}
