const router = require("express").Router();
const operatorController = require("../../controllers/operatorController");

// Matches with "/api/operator"
router.route("/")
  .get(operatorController.findAll)
  .post(operatorController.create);

// Matches with "/api/operator/:id"
router
  .route("/:id")
  .get(operatorController.findById)
  .put(operatorController.update)
  .delete(operatorController.remove);

module.exports = router;
