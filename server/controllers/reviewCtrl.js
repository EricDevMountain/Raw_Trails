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
  db.postReview([req.body.text, req.user.id])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
};

const putReview = (req, res, next) => {
  const db = req.app.get("db");
  db.putReview([req.body.text, req.params.id])
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
