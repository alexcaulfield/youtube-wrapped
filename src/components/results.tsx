import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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
  buttonContainer: {
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
  resultsContainer: {
    margin: theme.spacing(4, 0, 2),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  resultsColumn: {
    marginRight: theme.spacing(2),
    width: theme.spacing(70)
  },
}));

const Results = ({topChannels, topVideos, months, setActiveStep}) => {
  const classes = useStyles();
  if (topChannels.length === 0 && topVideos.length === 0) {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          No results 😔
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
        >
          Try a different year
        </Button>
      </>
    ) 
  }
  return (
    <>
      <div className={classes.resultsContainer}>
        <div className={classes.resultsColumn}>
          <Typography variant="h5" gutterBottom>
            Your Top Channels
          </Typography>
          {topChannels.slice(0, 5).map((value,key) => {
            const channelName = value[0];
            const nameSplit = channelName.split(' ');
            const initials = nameSplit.length > 1 ? `${nameSplit[0].charAt(0)}${nameSplit[1].charAt(0)}` : nameSplit[0].charAt(0);
            return (
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Channel name">
                      {initials}
                    </Avatar>
                  }
                  title={channelName}
                  subheader=""
                />
                <CardContent>
                  <Typography variant='subtitle2' gutterBottom>
                    Stats
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Number of videos watched: {value[1]}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className={classes.resultsColumn}>
          <Typography variant="h5" gutterBottom>
            Your Top Videos
          </Typography>
          {topVideos.slice(0, 5).map((value,key) => {
            const videoName = value[0];
            const nameSplit = videoName.split(' ');
            return (
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Channel name">
                      {nameSplit[0].charAt(0)}
                    </Avatar>
                  }
                  title={value[0]}
                  subheader=""
                />
                <CardContent>
                  <Typography variant='subtitle2' gutterBottom>
                    Stats
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Number of times watched: {value[1]}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className={classes.resultsColumn}>
          <Typography variant="h5" gutterBottom>
            Month By Month Video Views
          </Typography>
          {months.map((value,key) => {
            return (
              <Card>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Channel name">
                      {value[0].charAt(0)}
                    </Avatar>
                  }
                  title={value[0]}
                  subheader=""
                />
                <CardContent>
                  <Typography variant='subtitle2' gutterBottom>
                    Stats
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Number of videos watched: {value[1]}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          className={classes.button}
        >
          Try a different year
        </Button>
      </div>
    </>
  )
}

export default Results;