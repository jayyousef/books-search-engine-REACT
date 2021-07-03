const router = require("express").Router();
const bookingRoutes = require("./booking");
const operatorRoutes = require('./operators')
const tourRoutes = require('./tours')
const userRoutes = require('./user')

//  routes
router.use("/booking", bookingRoutes);
router.use("/operator", operatorRoutes);
router.use("/tours", tourRoutes);
router.use("/user", userRoutes);

module.exports = router;
