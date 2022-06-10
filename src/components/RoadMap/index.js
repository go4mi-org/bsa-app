import React from "react";
import Container from "../Container";
import MapCard from "./MapCard";
import { courseData } from "./CourseData";

const RoadMap = () => {
  return (
    <div id="roadmap" className="w-full py-24">
      <Container>
        <h1 className="text-blue-900 text-center text-4xl font-bold mb-8">
          Course Road Map
        </h1>
        <div className="w-full grid__ctm justify-between gap-8">
          {courseData.map((course) => {
            return <MapCard key={course.id} course={course} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default RoadMap;
