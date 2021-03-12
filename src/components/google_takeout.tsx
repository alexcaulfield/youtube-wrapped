import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'block',
    width: 'fit-content',
    margin: theme.spacing(4, 0, 2),
  },
  body: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  imgColumn: {
    marginRight: theme.spacing(2),
  },
}));

const GoogleTakeout = ({setActiveStep}) => {
  const classes = useStyles();

  const images = useStaticQuery(graphql`
  query {
    imgOne: file(relativePath: { eq: "google_takeout.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgTwo: file(relativePath: { eq: "youtube_takeout.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgThree: file(relativePath: { eq: "youtube_settings.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return (
  <>
    <Typography variant="h3" gutterBottom className={classes.header}>
      Google Takeout Info
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.body}>
      Go to{' '} 
      <Link 
        href="https://takeout.google.com/settings/takeout"  
        variant="body1"
        target="_blank"
        rel="noopener"
      >
        Google Takeout
      </Link>
      {' '} to download your YouTube watch history
    </Typography>

    <div className={classes.imgContainer}>
      <div className={classes.imgColumn}>
        <Typography variant="body1" gutterBottom className={classes.body}>
          Google Takeout landing page - Deselect all
        </Typography>
        <Img
          fixed={images.imgOne.childImageSharp.fixed}
          alt="Google Takeout Landing"
        />
        <Typography variant="body1" gutterBottom className={classes.body}>
          Select the YouTube section
        </Typography>
        <Img
          fixed={images.imgTwo.childImageSharp.fixed}
          alt="YouTube section of Google Takeout"
        />
      </div>
      <div className={classes.imgColumn}>
        <Typography variant="body1" gutterBottom className={classes.body}>
          Select just the required data to request for this app
        </Typography>
        <Img
          fixed={images.imgThree.childImageSharp.fixed}
          alt="YouTube settings on Google Takeout"
        />
      </div>
    </div>
    <div className={classes.buttonContainer}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
        className={classes.button}
      >
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
        className={classes.button}
      >
        Continue
      </Button>
    </div>
  </>
)};

export default GoogleTakeout;