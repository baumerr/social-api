const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    updateThought,
    getThoughtById,
    removeThought,
    createReaction,
    removeReaction,
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought)

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)


router
  .route('/:thoughtId/reactions')
  .post(createReaction)

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;