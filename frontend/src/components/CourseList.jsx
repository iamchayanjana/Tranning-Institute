import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/course/list');
        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses: {error.message}</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm border-warning rounded">
              <div className="card-body">
                <h5 className="card-title text-primary">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted mb-0">Amount: ${course.amount}</p>
                  <p className="text-muted mb-0">Duration: {course.duration}</p>
                </div>
              </div>
              <div className="card-footer text-muted text-center">
                <small>Course details</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
