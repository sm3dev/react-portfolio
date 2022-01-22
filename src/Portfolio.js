import React, { useEffect, useState } from "react";
import { ComingSoon } from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import HeaderLogo from "./components/HeaderLogo";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectList } from "./components/ProjectList";
import { Resume } from "./components/Resume";
import { TechStack } from "./components/TechStack";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNavTaglines(data.navTaglines);
        setAllTechObjects(data.techStack);
      });
  }, []);

  return (
    <div className="page">
<ProjectList />
      <TechStack allTechObjects={allTechObjects} />
      <HeaderLogo allNavTaglines={allNavTaglines} />
      <ComingSoon />
      <Resume />
      <Footer />
    </div>
  );
};

// export default Portfolio;
