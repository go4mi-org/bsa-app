import React, { useState } from "react";
import Container from "../Container";
import MapCard from "./MapCard";
import { courseData } from "./CourseData";
import { GiCheckMark } from "react-icons/gi";

const RoadMap = () => {
  const [itemId, setItemId] = useState(1);

  const handleIdDispatcher = (value) => {
    setItemId(value);
  };

  return (
    <div id="roadmap" className="w-full pt-24">
      <Container>
        <h1 className="text-blue-900 text-center text-3xl lg:text-4xl font-bold mb-8">
          Course Road Map
        </h1>
        <div className="w-full flex flex-wrap justify-between gap-8">
          <div className="grid__ctm gap-4">
            {courseData.map((course) => {
              return (
                <MapCard
                  key={course.id}
                  handleIdDispatcher={handleIdDispatcher}
                  course={course}
                />
              );
            })}
          </div>
          <div className="flex-1 bg-slate-100">
            {courseData
              .filter((item) => item.id === itemId)
              .map((course) => {
                return (
                  <ul
                    key={course.session}
                    className="px-8 p-4 text-slate-500 w-full flex flex-col gap-2"
                  >
                    <h1 className="font-bold text-2xl">{course.session} </h1>
                    {course.scheme.map((item) => {
                      return (
                        <li className="flex gap-2" key={item}>
                          <GiCheckMark className="text-green-600" /> {item}
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RoadMap;
