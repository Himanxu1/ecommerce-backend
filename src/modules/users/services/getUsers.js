const userModel = require('../model');

async function getUsers(req, res) {
  try {
    const allUsers = await userModel.find().select('username email role _id');
    return res
      .status(200)
      .send({ code: 200, message: 'users fetched', users: allUsers });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ code: 400, message: 'error fetching the users' });
  }
}

module.exports = getUsers;
