import React from "react";

const MapCard = ({ course }) => {
  return (
    <div className="min-w-[18rem] min-h-80 flex flex-col gap-2 shadow-lg">
      <div className="bg-blue-700 p-4 text-slate-100">
        <h1 className="text-2xl font-bold">{course.session}</h1>
        <p>Duration: {course.duration}</p>
      </div>
      <ul className="list-[square] px-8 p-4 text-slate-500 w-full flex flex-col gap-2">
        {course.scheme.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default MapCard;
