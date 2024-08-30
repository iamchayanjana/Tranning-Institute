import React from 'react';
import CourseList from '../components/CourseList';

const CoursesPage = () => {
  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: 'center' }}>All Courses</h2>
      <CourseList />
    </div>
  );
};

export default CoursesPage;
