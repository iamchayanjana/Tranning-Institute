import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // To handle logout and redirection
axios.defaults.withCredentials = true;

const AdminPanel = () => {
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [courseData, setCourseData] = useState({
    _id: '',
    name: '',
    description: '',
    amount: '',
    duration: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch courses
    axios.get('http://localhost:5000/api/course/list')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));

    // Fetch users
    axios.get('http://localhost:5000/api/auth/list')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Update course
        await axios.put(`http://localhost:5000/api/course/${courseData._id}`, courseData);
        setCourses(courses.map(course =>
          course._id === courseData._id ? courseData : course
        ));
        setIsEditing(false);
      } else {
        // Add new course
        const response = await axios.post('http://localhost:5000/api/course/add', courseData);
        setCourses([...courses, response.data]);
      }
      setCourseData({
        _id: '',
        name: '',
        description: '',
        amount: '',
        duration: ''
      }); // Clear form fields
    } catch (error) {
      console.error('Error handling course:', error);
    }
  };

  const handleEdit = (course) => {
    setCourseData(course);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/course/${id}`);
      setCourses(courses.filter(course => course._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleLogout = () => {
    axios.post('http://localhost:5000/api/admin/logout', {}, { withCredentials: true })
      .then(() => {
        navigate('/adminlogin'); // Redirect to login page or home page after logout
      })
      .catch(error => console.error('Error logging out:', error));
  };

  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-md-12 d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center mb-4">Admin Panel</h2>
          <div className="d-flex align-items-center">
            <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          {/* Course Form */}
          <div className="card shadow-sm">
            <div className="card-header">
              <h5 className="mb-0">{isEditing ? 'Edit Course' : 'Add New Course'}</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={courseData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={courseData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={courseData.amount}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    name="duration"
                    value={courseData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">{isEditing ? 'Update Course' : 'Add Course'}</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Display */}
      <div className="row mb-4">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Courses</h3>
          <div className="card shadow-sm">
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Duration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map(course => (
                    <tr key={course._id}>
                      <td>{course.name}</td>
                      <td>{course.description}</td>
                      <td>${course.amount}</td>
                      <td>{course.duration}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(course)}
                        >
                          Edit
                        </button>
                        <br></br>
                        <br></br>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(course._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* User Details Display */}
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center mb-4">User Details</h3>
          <div className="card shadow-sm">
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user._id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
