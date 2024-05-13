const express = require("express");
const router = express.Router();
const {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} = require("../src/controller/userController");

router.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
router.post("/users", createUser);

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
