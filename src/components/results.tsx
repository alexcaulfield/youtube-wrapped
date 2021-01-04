import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Results = ({topChannels, topVideos}) => (
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
  </>
)

export default Results;