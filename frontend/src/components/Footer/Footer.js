import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CopyrightIcon from "@material-ui/icons/Copyright";
import IconButton from "@material-ui/core/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";

import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

import {useState,useEffect} from 'react';

import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: theme.spacing(2),
  },
  left: {
    color: theme.palette.text.secondary,
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    color: theme.palette.text.secondary,
  },
}));

const Footer = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const classes = useStyles();

  return (
    <footer className={classes.root}>
      {!isMobile&&
      <div className="footer-container">
        <div className="copyright-container">
          <CopyrightIcon className="copyright-icon" />
          <div className="copyright-text">
            2077 UntitledUI. All rights reserved
          </div>
        </div>
        <div className="icons-container">
          <Grid item xs={6} className={classes.right}>
            <IconButton
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://angel.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <FontAwesomeIcon icon={faAngellist} />
            </IconButton>

            <IconButton
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <FontAwesomeIcon icon={faDribbble} />
            </IconButton>
          </Grid>
        </div>
      </div>}
      {isMobile&&
        
      <div className="footer-container">
        <div className="icons-container">
          <Grid item xs={6} className={classes.right}>
            <IconButton
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://angel.co/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <FontAwesomeIcon icon={faAngellist} />
            </IconButton>

            <IconButton
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.socialIcon}
            >
              <FontAwesomeIcon icon={faDribbble} />
            </IconButton>
          </Grid>
        </div> 
         <div className="copyright-container">
        <CopyrightIcon className="copyright-icon" />
        <div className="copyright-text">
          2077 UntitledUI. All rights reserved
        </div>
      </div>
      </div>
      }
    </footer>
  );
};

export default Footer;
