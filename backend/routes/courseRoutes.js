const express = require('express');
const { getCourses, addCourse, deleteCourse, updateCourse } = require('../controllers/courseController');
const router = express.Router();

router.get('/list', getCourses);
router.post('/add', addCourse);
router.delete('/:id', deleteCourse);
router.put('/:id', updateCourse);

module.exports = router;
