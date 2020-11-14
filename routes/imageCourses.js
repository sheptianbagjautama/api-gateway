const express = require('express');
const router = express.Router();

const ImageCoursesHandler = require('./handler/image-courses');

router.post('/', ImageCoursesHandler.create);
router.delete('/:id',ImageCoursesHandler.destroy);

module.exports = router;
