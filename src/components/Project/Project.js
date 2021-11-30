import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { name, link, img, desc, id } = project;

  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          textAlign: "left",
          background: "#202023",
          boxShadow: 3,
        }}
      >
        <CardMedia component="img" alt="project1" image={img} />
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="white">
            {name}
          </Typography>
          <Typography variant="body2" gutterBottom color="white">
            {desc}
          </Typography>

          <Link to={`/projectDetails/${id}`}>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Project;
