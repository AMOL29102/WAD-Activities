// components/StudentSearch.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentSearch() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchStudent = async () => {
    if (!studentId) {
      setError('Please enter a student ID.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:3000/students/${studentId}`);
      setSelectedStudent(response.data);
    } catch (error) {
      setError('Student not found. Please check the ID and try again.');
      console.error("Error fetching student details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="student-section">
      <header className="section-header">
        <h1>Student Search</h1>
        <Link to="/" className="nav-button">Back to List</Link>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="search-container">
        <input
          type="number"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="search-input"
          disabled={loading}
        />
        <button
          onClick={handleFetchStudent}
          className="search-button"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {selectedStudent && (
        <div className="student-details-card">
          <h3>{selectedStudent.name}'s Profile</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="label">Age:</span>
              <span>{selectedStudent.age}</span>
            </div>
            <div className="detail-item">
              <span className="label">Email:</span>
              <span>{selectedStudent.email}</span>
            </div>
            <div className="detail-item">
              <span className="label">Course:</span>
              <span>{selectedStudent.course}</span>
            </div>
          </div>
          
          <div className="marks-section">
            <h4>Academic Performance</h4>
            <div className="marks-grid">
              <div className="mark-item">
                <span className="label">Math:</span>
                <span>{selectedStudent.marks.math}</span>
              </div>
              <div className="mark-item">
                <span className="label">Physics:</span>
                <span>{selectedStudent.marks.physics}</span>
              </div>
              <div className="mark-item">
                <span className="label">Chemistry:</span>
                <span>{selectedStudent.marks.chemistry}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default StudentSearch;