// const Pool = require('pg').Pool;
// const pool = new Pool({
//   user: "postgres",
//   password: '1614',
//   host: "localhost",
//   port: 5432,
//   database: "users_list"
// })

let passwordsList = [
  {
    email: 'john@gmail.com',
    password: 'john4567',
    id: 0
  },
  {
    email: 'max@gmail.com',
    password: 'max4567',
    id: 1
  },
  {
    email: 'karl@mail.ru',
    password: 'karl4567',
    id: 2
  },
  {
    email: 'alice@yandex.ru',
    password: 'alice4567',
    id: 3
  },
  {
    email: 'mark@gmail.com',
    password: 'mark4567',
    id: 4
  }
];

// let data = {
//   passwordsList,
//   pool
// }

module.exports = passwordsList;