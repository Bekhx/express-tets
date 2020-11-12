let passwordsList = require('../database/db');

const getHomePage = (req, res) => {
  return res.status(200).sendFile(__dirname, 'index.html');
};

const postCard = (req, res) => {
  let counter = 4;
  counter++;
  const userData = {...req.body, id: counter};
  passwordsList.push(userData);
  return res.status(201).json(userData);
};

const findById = (req, res) => {
  let findUser = passwordsList.filter(i => i.id == req.params.id);
  return res.status(200).json(findUser);
};

const deleteById = (req, res) => {
  const objForDelete = passwordsList.filter( item => item.id == req.params.id );
  const indexOfObj = passwordsList.indexOf(objForDelete[0]);
  passwordsList.splice(indexOfObj, 1);
  res.status(200).json(`User With ID: ${objForDelete[0].id} is Deleted`);
};

const allUsersList = (req, res) => {
  return res.status(200).json(passwordsList);
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