const router = require("express").Router();
const toursController = require("../../controllers/toursController");

// Matches with "/api/tours"
router.route("/")
  .get(toursController.findAll)
  .post(toursController.create);

// Matches with "/api/tours/:id"
router
  .route("/:id")
  .get(toursController.findById)
  .put(toursController.update)
  .delete(toursController.remove);

module.exports = router;
