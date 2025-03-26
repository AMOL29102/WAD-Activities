// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [studentData, setStudentData] = useState([]); 
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [studentId, setStudentId] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/students');
//         setStudentData(response.data); 
//       } catch (error) {
//         console.error("Error fetching students:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleFetchStudent = () => {
//     if (!studentId) {
//       alert("Please enter a student ID.");
//       return;
//     }

//     axios.get(`http://localhost:3000/students/${studentId}`)
//       .then(response => setSelectedStudent(response.data))
//       .catch(error => {
//         console.error("Error fetching student details:", error);
//         alert("Student not found.");
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Student List</h1>

//       <ul className="student-list">
//         {studentData.map(student => (
//           <li key={student.id}>{student.name} (ID: {student.id})</li>
//         ))}
//       </ul>

//       <div className="input-section">
//         <input 
//           type="number" 
//           placeholder="Enter Student ID" 
//           value={studentId} 
//           onChange={(e) => setStudentId(e.target.value)} 
//         />
//         <button onClick={handleFetchStudent}>Get Student Details</button>
//       </div>

//       {selectedStudent && (
//         <div className="student-details">
//           <h2>Details for {selectedStudent.name}</h2>
//           <table border="1">
//             <tbody>
//               <tr>
//                 <td><strong>Age</strong></td>
//                 <td>{selectedStudent.age}</td>
//               </tr>
//               <tr>
//                 <td><strong>Email</strong></td>
//                 <td>{selectedStudent.email}</td>
//               </tr>
//               <tr>
//                 <td><strong>Course</strong></td>
//                 <td>{selectedStudent.course}</td>
//               </tr>
//               <tr>
//                 <td colSpan="2"><strong>Marks</strong></td>
//               </tr>
//               <tr>
//                 <td>Math</td>
//                 <td>{selectedStudent.marks.math}</td>
//               </tr>
//               <tr>
//                 <td>Physics</td>
//                 <td>{selectedStudent.marks.physics}</td>
//               </tr>
//               <tr>
//                 <td>Chemistry</td>
//                 <td>{selectedStudent.marks.chemistry}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




// // App.jsx
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [studentData, setStudentData] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [studentId, setStudentId] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get('http://localhost:3000/students');
//       setStudentData(response.data);
//     } catch (error) {
//       setError('Failed to load students. Please try again.');
//       console.error("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFetchStudent = async () => {
//     if (!studentId) {
//       setError('Please enter a student ID.');
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(`http://localhost:3000/students/${studentId}`);
//       setSelectedStudent(response.data);
//     } catch (error) {
//       setError('Student not found. Please check the ID and try again.');
//       console.error("Error fetching student details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStudentClick = (id) => {
//     setStudentId(id);
//     handleFetchStudent();
//   };

//   return (
//     <div className="app-container">
//       <header className="app-header">
//         <h1>Student Management System</h1>
//       </header>

//       {error && <div className="error-message">{error}</div>}

//       <section className="student-section">
//         <h2>Students</h2>
//         {loading && !selectedStudent && <div className="loader">Loading...</div>}
        
//         <ul className="student-list">
//           {studentData.map(student => (
//             <li 
//               key={student.id} 
//               className="student-item"
//               onClick={() => handleStudentClick(student.id)}
//             >
//               <span>{student.name}</span>
//               <span className="student-id">ID: {student.id}</span>
//             </li>
//           ))}
//         </ul>

//         <div className="search-container">
//           <input
//             type="number"
//             placeholder="Enter Student ID"
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             className="search-input"
//             disabled={loading}
//           />
//           <button
//             onClick={handleFetchStudent}
//             className="search-button"
//             disabled={loading}
//           >
//             {loading ? 'Searching...' : 'Search'}
//           </button>
//         </div>

//         {selectedStudent && (
//           <div className="student-details-card">
//             <h3>{selectedStudent.name}'s Details</h3>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="label">Age:</span>
//                 <span>{selectedStudent.age}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="label">Email:</span>
//                 <span>{selectedStudent.email}</span>
//               </div>
//               <div className="detail-item">
//                 <span className="label">Course:</span>
//                 <span>{selectedStudent.course}</span>
//               </div>
//             </div>
            
//             <div className="marks-section">
//               <h4>Marks</h4>
//               <div className="marks-grid">
//                 <div className="mark-item">
//                   <span className="label">Math:</span>
//                   <span>{selectedStudent.marks.math}</span>
//                 </div>
//                 <div className="mark-item">
//                   <span className="label">Physics:</span>
//                   <span>{selectedStudent.marks.physics}</span>
//                 </div>
//                 <div className="mark-item">
//                   <span className="label">Chemistry:</span>
//                   <span>{selectedStudent.marks.chemistry}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default App;

// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentSearch from './components/StudentSearch';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/search" element={<StudentSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;