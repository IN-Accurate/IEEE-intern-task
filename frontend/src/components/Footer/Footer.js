import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';


import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  },
  socialIcon: {
    color: theme.palette.text.secondary,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item xs={6} className={classes.left}><Typography variant="body2">
  <FontAwesomeIcon icon={faCopyright} />
  {' '}
  <Link href="#" color="inherit" underline="none">
    Untitled UI
  </Link>
  {' - '}
  All rights reserved.
</Typography>

        </Grid>
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
      </Grid>
    </footer>
  );
};

export default Footer;
