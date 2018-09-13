const postAnswers = (req, res, next) => {
  const db = req.app.get("db");
  db.postAnswers([req.body.answersObj, req.params.id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const getTrips = (req, res, next) => {
  const db = req.app.get("db");
  db.getTrips()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  postAnswers,
  getTrips
};
