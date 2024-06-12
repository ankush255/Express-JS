const express = require("express");
const userRoutes = express.Router();
const upload = require('../helpers/imageUpload');

const { 
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    changePassword,
    deleteUser
    } = require("../controller/user.controller");

const veriftToken = require("../helpers/verifyToken");




userRoutes.post("/register", upload.single('profileImage') , registerUser);
userRoutes.post("/login", loginUser);

userRoutes.get("/profile",veriftToken, getProfile);

userRoutes.put("/update",veriftToken, updateProfile);

userRoutes.put("/Change-Password",veriftToken, changePassword);

userRoutes.delete("/delete",veriftToken, deleteUser);


module.exports = userRoutes;
