import {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function DisplayCourse() {
  // conditional
  const [enrolled, setEnroll] = useState(false);
  // data
  const [courseInfo, setInfo] = useState(
    {
      name: 'Intro to Web Development',
      instructor: 'Instructor 1',
      semester: 'Spring',
      year: 2024,
      enrolled: 48,
      capacity: 50
    }
  );

  // hook
  function enroll() {
    setEnroll(!enrolled);
    
    if (enrolled) {
      setInfo({
        ...courseInfo,
        enrolled: courseInfo.enrolled - 1
      });
    }
    else {
      setInfo({
        ...courseInfo,
        enrolled: courseInfo.enrolled + 1
      });
    }
  }

  // return 2 components: data and enroll button
  return (
    <div>
      <h1>{courseInfo.name}</h1>
      <h2>{courseInfo.instructor}</h2>
      <h3>{courseInfo.semester} {course.year}</h3>
      <h4>Capacity: {courseInfo.enrolled} / {courseInfo.capacity}</h4>

      <button onClick={enroll}>
        {enrolled ? 'Remove' : 'Enroll in'} this course
      </button>
    </div>
  );
}

// 3rd component is login button
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with John in MI449 Lab 10
        </a>
        <div>
          
        </div>
        <button onClick={login}>
          Log {loggedIn ? 'out' : 'in'}
        </button>
        {loggedIn && <DisplayCourse />}
      </header>
    </div>
  );
}

export default App;
