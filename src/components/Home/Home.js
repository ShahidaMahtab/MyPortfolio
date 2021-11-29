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
      <Typography color="white" paragraph textAlign="left">
        -- I'm a passionate developer, I have experience in HTML, CSS, and
        JavaScript. Building easy-to-use, user-friendly websites, and
        applications is truly a passion of mine . In addition to my knowledge
        base, I actively seek out new technologies and stay up to date on
        industry trends and advancements.
      </Typography>
    </div>
  );
};

export default Home;
