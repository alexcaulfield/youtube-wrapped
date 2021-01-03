import * as React from 'react';
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {splitChannelsAndVideos, sortTopResults} from '../utils/parse_data';

const DataInput = () => {
  const [topChannels, setTopChannels] = useState(new Map())
  const [topVideos, setTopVideos] = useState(new Map())

  const loadHistoryData = event => {
    const file = event.target.files[0];
    
    const readFile = new FileReader();
    readFile.readAsBinaryString(file);

    readFile.onloadend = function(){
      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(readFile.result.toString(), 'text/html');
      const links = parsedHtml.getElementsByTagName("a");
      const results = splitChannelsAndVideos(links);
      const sortedChannels = sortTopResults(results.channels);
      const sortedVideos = sortTopResults(results.videos);
      console.log(sortedChannels)
      console.log(sortedVideos)
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
    </>
  )
}

export default DataInput;