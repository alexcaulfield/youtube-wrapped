import * as React from 'react';
import {splitChannelsAndVideos, sortTopResults} from '../utils/parse_data';
import Typography from '@material-ui/core/Typography';

const DataInput = ({setTopChannels, setTopVideos, setActiveStep}) => {
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
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }
  
  return (
    <>
      <Typography variant="body1" gutterBottom>
        Extract the .zip file you've received
      </Typography>
      <Typography variant="h5" gutterBottom>
        Upload your watch-history.html file!
      </Typography>
      <Typography variant="body2" gutterBottom>
        Which is under Takeout &gt; YouTube and YouTube Music &gt; history &gt; watch-history.html  
      </Typography>
      <form>   
        <input
          type="file"
          value=''
          onChange={loadHistoryData}
        />
      </form> 
    </>
  )
}

export default DataInput;