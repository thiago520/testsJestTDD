"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const MessageController_1 = require("./controllers/MessageController");
const UserController_1 = require("./controllers/UserController");
const router = (0, express_1.Router)();
exports.router = router;
const messageController = new MessageController_1.MessageController();
const userController = new UserController_1.UserController();
router.get('/', messageController.handle);
router.post('/user', userController.createUser);