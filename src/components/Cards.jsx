import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);
  //   //! It returns a list of all Courses recevied from the api response in one array
  function getCourses() {
    if (category === "All") {
      let allCourse = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourse.push(courseData);
        });
      });
      return allCourse;
    } else {
      //! sirf specific category ke data ka array pass karunga
      return courses[category];
    }
  }

  return (
    <div className="flex justify-center flex-wrap gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
};

export default Cards;
