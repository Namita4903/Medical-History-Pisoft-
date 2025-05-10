const route = require("express").Router()

const register = require("../../controllers/auth/register.js")
const login = require("../../controllers/auth/login.js")
const checkAuth=require("../../middleware/checkAuth.js");
//const products = require("../../controllers/auth/product.js");
const getUsers = require("../../controllers/auth/users.js");
const getUser =require("../../controllers/auth/getUsers.js");
const addUser = require("../../controllers/auth/addUser.js");
const updateUser = require("../../controllers/auth/updateUser.js");
const deleteUser  = require("../../controllers/auth/deleteUser.js");
const report = require("../../controllers/auth/report.js");
const getReport = require("../../controllers/auth/getReport.js");
const getReportsByDoctor = require("../../controllers/auth/getReportByDoctor.js");
const googleLogin = require("../../controllers/auth/google.js");
const getPaymentStatus = require("../../controllers/auth/getPayment.js");
const getReportByPatient = require("../../controllers/auth/getReportByPatient.js");




route.post("/register", register);
route.post("/login" , login);
route.post("/report",report);
route.post("/google",googleLogin);
route.post("/getPaymentStatus",getPaymentStatus);
route.get("/getReportByDoctor/:id",getReportsByDoctor);
route.get("/getReportByPatient/:id",getReportByPatient);
route.get("/users",getUsers);
route.get("/getUsers",getUser);
route.post("/addUser",addUser); 
route.put("/updateUser/:id", updateUser);
route.delete("/deleteUser/:id", deleteUser);

module.exports = route;