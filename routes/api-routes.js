const router = require("express").Router();

//get
express.Router().get("/api/workouts", (req, res) => {
  workoutdb
    .find()
    .then(function(data) {
      console.log(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//post
router.post("/api/workouts", function(req, res) {
  workout
    .create({})
    .then(function(dbworkout) {
      res.json(dbworkout);
    })
    .catch(function(err) {
      res.json(err);
    });
});

//put - update
router.put("/api/workouts/:id", function(req, res) {
  console.log(params.id);
  workout
    .findByIdAndUpdate(
      params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
    .then(function(dbworkout) {
      res.json(dbworkout);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
