// components/StudentList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentList() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/students');
      setStudentData(response.data);
    } catch (error) {
      setError('Failed to load students. Please try again.');
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="student-section">
      <header className="section-header">
        <h1>Student Directory</h1>
        <Link to="/search" className="nav-button">Search Students</Link>
      </header>

      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loader">Loading...</div>}

      <ul className="student-list">
        {studentData.map(student => (
          <li key={student.id} className="student-item">
            <span>{student.name}</span>
            <span className="student-id">ID: {student.id}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StudentList;