const userService = require('../services/userService');

exports.listUsers = async (req, res) => {
    try {
        const users = await userService.listUsers();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.userId);
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.userId, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.partialUpdateUser = async (req, res) => {
    try {
        const user = await userService.partialUpdateUser(req.params.userId, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.userId);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error.message);
    }
};
