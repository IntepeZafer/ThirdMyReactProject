import React, { useState } from 'react';
import './App.css';
import Course from './Course';
import { getRandomImage } from './getRandomImage';

const courseMap = {
  Angular: {
    title: "Angular",
    description: "Angular Dersleri",
  },
  Boostrap: {
    title: "Boostrap",
    description: "Boostrap Dersleri",
  },
  Ccsharp: {
    title: "Ccsharp",
    description: "Ccsharp Dersleri",
  },
  KompleWeb: {
    title: "KompleWeb",
    description: "KompleWeb Dersleri",
  },
};

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomImage()]);
  };

  const courseList = courses.map((course, index) => (
    <Course
      key={index}
      title={courseMap[course].title} // Get title from courseMap
      description={courseMap[course].description} // Get description from courseMap
      image={course}
    />
  ));

  return (
    <div className='App'>
      <button onClick={handleClick}>Kurs Ekle</button>
      <div className='courseList'>{courseList}</div>
    </div>
  );
}

export default App;
