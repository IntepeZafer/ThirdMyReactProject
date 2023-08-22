import React from 'react';
import './Course.css'
import Angular from "./assets/images/angular.jpg";
import Boostrap from "./assets/images/bootstrap5.png";
import Ccsharp from "./assets/images/ccsharp.png";
import KompleWeb from "./assets/images/kompleweb.jpg";

const courseMap = {
  Angular: Angular,
  Boostrap: Boostrap,
  Ccsharp: Ccsharp,
  KompleWeb: KompleWeb,
};

function Course({ title, description, image }) {
  return (
    <div className="images">
      <h2>{title}</h2>
      <img src={courseMap[image]} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default Course;
