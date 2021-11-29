import { Button, Typography } from "@mui/material";
import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import resume from "../../../src/Resume/ShahidaMahtab(Resume) (1).pdf";
const About = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `resume.pdf`;
    link.href = resume;
    link.click();
  };
  return (
    <div>
      <Typography color="white" paragraph>
        I'm Shahida Binta Mahtab I'm a passionate developer, I have experience
        in HTML, CSS, and JavaScript. Building easy-to-use, user-friendly
        websites, and applications is truly a passion of mine . In addition to
        my knowledge base, I actively seek out new technologies and stay up to
        date on industry trends and advancements. I've attached a copy of my
        resume detailing my experience, along with links to websites.
      </Typography>
      <Button
        onClick={onDownload}
        variant="contained"
        color="secondary"
        startIcon={<FileDownloadIcon />}
      >
        Resume
      </Button>
    </div>
  );
};

export default About;
