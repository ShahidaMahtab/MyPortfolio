import { Button, Typography } from "@mui/material";
import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Grid from "@mui/material/Grid";
import resume from "../../../src/Resume/ShahidaMahtab(Resume) (1).pdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const About = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `resume.pdf`;
    link.href = resume;
    link.click();
  };
  return (
    <div>
      <Typography variant="h2" fontWeight="bold" color="white" sx={{ mb: 5 }}>
        About Me
      </Typography>

      <Typography variant="h4" color="white" textAlign="left" sx={{ mb: 2 }}>
        Personal Infos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            First Name: Shahida
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Age: 22 years
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Phone: +8801733040409
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Skype: Shahida Mahtab
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
        <Grid item xs={6} md={3}>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Last Name: Mahtab
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Nationality: Bangladesh
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Address: Mirabajar Sylhet
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="left"
            sx={{ mb: 2 }}
          >
            Email:shahidamahtab2@gmail.com
          </Typography>
          <div className="flex">
            <Link
              to="https://github.com/ShahidaMahtab"
              className="text-white  hover:text-purple-800"
            >
              <Button color="inherit">
                <GitHubIcon fontSize="large" />
              </Button>
            </Link>
            <Link
              to="https://www.linkedin.com/in/shahida-mahtab-a994521b2/"
              className="text-white  hover:text-purple-800"
            >
              <Button color="inherit">
                <LinkedInIcon fontSize="large" />
              </Button>
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100011036791575"
              className="text-white  hover:text-purple-800"
            >
              <Button color="inherit">
                <FacebookIcon fontSize="large" />
              </Button>
            </Link>
          </div>
        </Grid>

        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default About;
