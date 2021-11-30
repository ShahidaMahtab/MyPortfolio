import { Grid, Typography } from "@mui/material";
import React from "react";
import Project from "../Project/Project";
import project1 from "../../Images/project1.PNG";
import project2 from "../../Images/project2.PNG";
import project3 from "../../Images/project3.PNG";
const projects = [
  {
    id: 1,
    name: "Automan",
    img: project1,
    desc: "Automan is a car selling website where users can choose their desired car and purchase it from website.",
  },
  {
    id: 2,
    name: "Go Travel",

    img: project2,
    desc: "Go Travel is Destination booking website where users can select their desired destination to travel and we will provide all the accomodation.",
  },
  {
    id: 3,
    name: "Therapic",
    img: project3,
    desc: "Therapic is very useful website who are suffering mentally and looking for a therapist, they can easily book appointments.",
  },
];
const Projects = () => {
  return (
    <div>
      <Typography variant="h2" fontWeight="bold" color="white" sx={{ mb: 5 }}>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
