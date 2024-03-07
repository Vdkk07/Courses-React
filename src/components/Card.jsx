import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Filter from "./Filter";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      //! pehele se like hua pada hai
      setLikedCourses((prev) => prev.filter((C_id) => C_id !== course.id));
      toast.warning("Like Removed");
    } else {
      //! pehle se like nhi hua hai
      //?Insert karana hai like wala course ko likedCourses mein

      if (likedCourses.length === 0) {
        //* jab likedCourses vala array empty ho

        setLikedCourses([course.id]);
      } else {
        //* non empty case
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-[#0c142e] rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} alt="{course.image.alt}" />

        <div className="w-[40px] h-[40px] rounded-full bg-white absolute right-2 top-[9rem] grid place-content-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="px-2 py-4">
        <p className="text-lg font-semibold text-white text-start leading-6">
          {" "}
          {course.title}
        </p>
        <p className="text-md pt-6 text-white text-start">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
