const router = require("express").Router()

const authRoutes = require("./Auth.route.js");
const contactRoute = require("./contact.route");
const doctorRoute = require("./doctorAccess.route.js");

router.use("/doctor", doctorRoute);

router.use("/auth", authRoutes);

router.use("/contact", contactRoute);


module.exports = router

