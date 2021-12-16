"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const user_controller_1 = require("../controllers/users.controller");
router.route('/user')
    .post(user_controller_1.createUser)
    .get(user_controller_1.getUsers);
router.route('/user/:id')
    .get(user_controller_1.getUser)
    .delete(user_controller_1.deleteUser)
    .put(user_controller_1.updateUser);

module.exports = router;