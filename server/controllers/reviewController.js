const getReviews = (req, res, naxt) => {
  const db = req.app.get("db");
  db.getReviews()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const postReview = (req, res, next) => {
  const db = req.app.get("db");
  db.postReview([req.body.text])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const putReview = (req, res, next) => {
  const db = req.app.get("db");
  db.putReview([req.params.id, req.body.text])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const deleteReview = (req, res, next) => {
  const db = req.app.get("db");
  db.deleteReview([req.params.id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getReviews,
  postReview,
  putReview,
  deleteReview
};
