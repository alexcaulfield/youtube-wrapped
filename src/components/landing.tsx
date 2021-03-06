import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
  button: {
    marginBottom: theme.spacing(2),
  }
}));


const Landing = ({setActiveStep}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" gutterBottom className={classes.header}>
        Welcome to YouTube Wrapped!
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.body}>
        Ever wished there was a way to get Spotify Wrapped but for your YouTube videos?
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.body}>
        We're here to help you discover your top channels, top videos and 
        learn other fun facts about your watching habits!
      </Typography>
      <Typography variant="body1" gutterBottom className={classes.body}>
        Since YouTube won't let us pull your watch history from your account,
        we'll need you to gather that from your Google account - click Get Started when you're ready!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
      >
        Get Started
      </Button>
    </>
  )
};

export default Landing;