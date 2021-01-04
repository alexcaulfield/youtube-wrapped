import * as React from 'react';
import {useState} from 'react';
import {splitChannelsAndVideos, sortTopResults} from '../utils/parse_data';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const DataInput = () => {
  // top 20 channels
  const [topChannels, setTopChannels] = useState([])
  // top 20 videos
  const [topVideos, setTopVideos] = useState([])

  const loadHistoryData = event => {
    const file = event.target.files[0];
    
    const readFile = new FileReader();
    readFile.readAsText(file);

    readFile.onloadend = function(){
      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(readFile.result.toString(), 'text/html');
      const links = parsedHtml.getElementsByTagName("a");
      const results = splitChannelsAndVideos(links);
      const sortedChannels = sortTopResults(results.channels);
      const sortedVideos = sortTopResults(results.videos);
      const channelArray = Array.from(sortedChannels).slice(0, 20);
      const videoArray = Array.from(sortedVideos).slice(0, 20);
      setTopChannels(channelArray)
      setTopVideos(videoArray)
    }
  }
  
  return (
    <>
      <form>   
        <input
          type="file"
          value=''
          onChange={loadHistoryData}
        />
      </form> 
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
}

export default DataInput;