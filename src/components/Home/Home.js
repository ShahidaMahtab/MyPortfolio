import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import resume from "../../../src/Resume/ShahidaMahtab(Resume) (1).pdf";
const Home = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `resume.pdf`;
    link.href = resume;
    link.click();
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            sx={{ textAlign: "left" }}
          >
            Hi<span className="font-bold text-7xl ">,</span>
          </Typography>
          <Typography
            variant="h2"
            color="white"
            fontWeight="bold"
            sx={{ textAlign: "left" }}
          >
            I<span className="font-bold text-7xl">'</span>m Shahida
            <span className="font-bold text-7xl">,</span>
          </Typography>
          <Typography
            variant="h2"
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
            sx={{ textAlign: "left", mb: 3 }}
          >
            Front End Developer / Mern Stack Developer
          </Typography>
          <Button
            onClick={onDownload}
            variant="contained"
            color="secondary"
            startIcon={<FileDownloadIcon />}
            sx={{ display: "flex" }}
          >
            Resume
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
