import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Results = ({topChannels, topVideos, months, setActiveStep}) => {
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
        <Typography variant="h5" gutterBottom>
          Your Top Channels
        </Typography>
        {topChannels.slice(0, 5).map((value,key) => {
          return (
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="Channel name">
                    R
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
        <Typography variant="h5" gutterBottom>
          Your Top Videos
        </Typography>
        {topVideos.slice(0, 5).map((value,key) => {
          return (
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="Channel name">
                    R
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
        <Typography variant="h5" gutterBottom>
          Month By Month Video Views
        </Typography>
        {months.map((value,key) => {
          return (
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="Channel name">
                    R
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
    </>
  )
}

export default Results;