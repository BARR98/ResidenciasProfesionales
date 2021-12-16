"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../models/User"));
async function getUsers(req, res) {
    const { email } = req.query;
    const { password } = req.query;
    if (email != undefined && password != undefined) {
        const query = {
            email: email,
            password: password
        };
        await Users_1.default.findOne(query)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                return res.json({ message: 'Error deleting user by Id and password' });
            });
    } else {
        await Users_1.default.find()
            .then((users) => {
                res.json(users);
            })
            .catch((err) => {
                return res.json({ message: 'Error getting all users' });
            });
    }
    return res;
}
exports.getUsers = getUsers;
async function getUser(req, res) {
    const { id } = req.params;
    await Users_1.default.findById(id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return res.json({ message: 'Error getting user' });
        });
    return res;
}
exports.getUser = getUser;
async function createUser(req, res) {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    const newUser = {
        username: username,
        email: email,
        password: password,
        role: role
    };
    //console.log(newUser);
    const user = new Users_1.default(newUser);
    await user.save()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return res.json({ message: 'Error creating user' });
        });
    return res;
}
exports.createUser = createUser;
async function deleteUser(req, res) {
    const { id } = req.params;
    await Users_1.default.findByIdAndRemove(id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            return res.json({ message: 'Error deleting user' });
        });
    return res;
}
exports.deleteUser = deleteUser;
async function updateUser(req, res) {
    const { id } = req.params;
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { role } = req.body;
    try {
        const updatedUser = await Users_1.default.findByIdAndUpdate(id, {
            username,
            email,
            password,
            role
        }, { new: true });
        return res.json(updatedUser);
    } catch (err) {
        return res.json({ message: 'Error updating user' });
    }
}
exports.updateUser = updateUser;