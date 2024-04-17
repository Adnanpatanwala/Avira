const express = require('express');
const router = express.Router();
const {authenticate} = require('../middleware/authentication');
const {createReview,getAllReviews,getSingleReviews,deleteReview,updateReview} = require('../Controller/ReviewController');

router.route('/').get(getAllReviews).post(authenticate,createReview);
router.route('/:id').get(getSingleReviews).delete(authenticate,deleteReview).patch(authenticate,updateReview);

module.exports = router;