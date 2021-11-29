import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Typography
        variant="h1"
        color="white"
        fontWeight="bold"
        sx={{ textAlign: "left" }}
      >
        Hi<span className="font-bold text-7xl ">,</span>
      </Typography>
      <Typography
        variant="h1"
        color="white"
        fontWeight="bold"
        sx={{ textAlign: "left" }}
      >
        I<span className="font-bold text-7xl">'</span>m Shahida
        <span className="font-bold text-7xl">,</span>
      </Typography>
      <Typography
        variant="h1"
        color="white"
        fontWeight="bold"
        sx={{ textAlign: "left" }}
      >
        Web Developer
      </Typography>

      <Typography
        variant="body2"
        color="white"
        fontWeight="bold"
        sx={{ textAlign: "left" }}
      >
        Front End Developer / Mern Stack Developer
      </Typography>
    </div>
  );
};

export default Home;
