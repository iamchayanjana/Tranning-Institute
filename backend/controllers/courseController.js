const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addCourse = async (req, res) => {
  try {
    const { name, description, amount, duration } = req.body;
    const course = new Course({ name, description, amount, duration });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, amount, duration } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { name, description, amount, duration },
      { new: true, runValidators: true }
    );
    if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Course deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
