const router = require("express").Router();
const workoutdb = require("../models/Workout.js");

//get
router.get("/api/workouts", (req, res) => {
  // console.log(req.body);
  workoutdb
    .find({})
    .then(function(data) {
      console.log(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  //add a limit for workouts pulled
  workoutdb
    .find({})
    // .limit(5) //put limit here
    .then(function(data) {
      //data is the result of the find()
      console.log("second" + JSON.stringify(data));
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

//post
router.post("/api/workouts", function(req, res) {
  workoutdb
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
  console.log(req.params.id);
  workoutdb
    .findByIdAndUpdate(
      req.params.id,
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
