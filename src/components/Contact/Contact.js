import { Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import Grid from "@mui/material/Grid";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63tes7f",
        "template_q96chvn",
        form.current,
        "user_4WFTOw45XRfM4Gc3yV5fw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container>
      <Typography variant="h2" fontWeight="bold" color="white" sx={{ mb: 5 }}>
        Contact Me
      </Typography>
      <Grid container className="p-3">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="white"
            textAlign="left"
          >
            Get In Touch
          </Typography>
          <Typography
            vairant="body2"
            color="white"
            textAlign="left"
            sx={{ mb: 3 }}
          >
            Feel free to get in touch with me <br />
            for any further queries , please <br />
            don't hesitate to use the form.
            <br />
            I'm always open to discussing new <br />
            projects, creative ideas and opportunities .
          </Typography>
          <Typography
            vairant="h2"
            color="white"
            textAlign="left"
            sx={{ mb: 3 }}
          >
            <span>
              <MapRoundedIcon fontSize="large" sx={{ mr: 2 }} />
            </span>
            <span className="text-1xl">Address</span>
            <br />
            Sylhet ,Bangladesh
          </Typography>
          <Typography
            vairant="h2"
            color="white"
            textAlign="left"
            sx={{ mb: 3 }}
          >
            <span>
              <EmailRoundedIcon fontSize="large" sx={{ mr: 2 }} />
            </span>
            <span className="text-1xl">Email Me</span>
            <br />
            shahidamahtab2@gmail.com
          </Typography>
          <Typography vairant="h2" color="white" textAlign="left">
            <span>
              <CallRoundedIcon fontSize="large" sx={{ mr: 2 }} />
            </span>
            <span className="text-1xl">Call Me</span>
            <br />
            +8801733040409
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6">
                <input
                  type="text"
                  name="name"
                  id="first-name"
                  placeholder="Your Name"
                  className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                  style={{ background: "#202020" }}
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="border border-3 border-white rounded-md p-3 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                  style={{ background: "#202020" }}
                />
              </div>

              <div className="col-span-6 sm:col-span-12">
                <input
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="border border-3 border-white rounded-md py-3 px-8 text-white mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm "
                  style={{ background: "#202020" }}
                />
              </div>
              <div className="col-span-6 sm:col-span-12 ">
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="text-white border border-3 border-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm p-5"
                  style={{ background: "#202020" }}
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <input
                  type="submit"
                  value="Send"
                  className="bg-purple-900 text-white px-4 py-2 border rounded-md flex"
                />
              </div>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
