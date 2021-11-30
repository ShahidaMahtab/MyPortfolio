import { Grid, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Typography } from "@mui/material";
const ProjectDetails = () => {
  const { projectid } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  });
  const matchedId = projects.find(
    (project) => project.id === parseInt(projectid)
  );
  return (
    <div>
      <Typography variant="h2" fontWeight="bold" color="white" sx={{ mb: 5 }}>
        {matchedId?.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CardMedia
            component="img"
            alt="project1"
            image={matchedId?.img1}
            style={{ margin: "0 auto", width: "auto", height: "800px" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardMedia
            component="img"
            alt="project1"
            image={matchedId?.img2}
            style={{ margin: "0 auto", width: "auto", height: "500px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardMedia
            component="img"
            alt="project1"
            image={matchedId?.img3}
            style={{ margin: "0 auto", width: "auto", height: "500px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography variant="body2" color="white" sx={{ mb: 5 }}>
            {matchedId?.desc1}
          </Typography>
          <Typography variant="body2" color="white" sx={{ mb: 5 }}>
            {matchedId?.desc2}
          </Typography>
          <Typography variant="body2" color="white" sx={{ mb: 5 }}>
            {matchedId?.desc3}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectDetails;
