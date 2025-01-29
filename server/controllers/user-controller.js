const userService = require("../service/user-service");

class UserController {
  async registration(req, res, next) {
    try {
      const user = await userService.registration(req.body);
    } catch (error) {
      console.log(error);
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
  }

  async activate(req, res, next) {
    try {
    } catch (error) {}
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }

  async getUsers(req, res, next) {
    try {
      res.json("12345");
    } catch (error) {}
  }
}

module.exports = new UserController();
