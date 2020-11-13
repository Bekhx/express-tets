let db = require('../database/db');

const getHomePage = (req, res) => {
  return res.status(200).sendFile(__dirname, 'index.html');
};

const postCard = async (req, res) => {
  const {email, password} = req.body;
  const newUser = await db.query('INSERT INTO users_data (email, password) values ($1, $2) RETURNING *', [email, password]);
  return res.status(201).json(newUser.rows[0]);
};

const findById = async (req, res) => {
  const id = req.params.id;
  const user = await db.query('SELECT * FROM users_data where id = $1', [id]);
  return res.status(200).json(user.rows[0]);
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  const deletedUser = await db.query('DELETE FROM users_data where id = $1 ', [id]);
  res.status(200).json('deleted');
};

const allUsersList = async (req, res) => {
  const allUsers = await db.query('SELECT * FROM users_data');
  return res.status(200).json(allUsers.rows);
}

const requires = {
  postCard,
  findById,
  deleteById,
  getHomePage,
  allUsersList
};

module.exports = requires;

// you need create here functions to treatment data from database