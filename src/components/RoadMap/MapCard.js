import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const MapCard = ({ course, handleIdDispatcher }) => {
  return (
    <div className="h-40 min_width bg-slate-100 flex flex-col gap-2">
      <div className="p-4 flex items-center flex-col text-slate-700">
        <h1 className="text-2xl font-bold">{course.session}</h1>
        <p className="font-semibold">Duration: {course.duration}</p>
      </div>
      <button
        onClick={() => handleIdDispatcher(course.id)}
        className="bg-green-600 font-normal mx-auto flex active:scale-[0.97] items-center gap-2 w-max px-6 py-2 rounded-lg text-white"
      >
        Check <BsArrowRightCircle className="text-lg stroke-1" />
      </button>
    </div>
  );
};

export default MapCard;
