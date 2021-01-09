import * as React from 'react';
import {useState} from 'react';
import {sortTopResults, parseData} from '../utils/parse_data';
import Typography from '@material-ui/core/Typography';
import { DatePicker } from '@material-ui/pickers';
import moment from "moment";

const DataInput = ({setTopChannels, setTopVideos, setActiveStep, setMonths}) => {
  const now = moment.utc(new Date(), 'YYYY');
  const [selectedDate, handleDateChange] = useState(now);

  // https://github.com/mui-org/material-ui-pickers/issues/359#issuecomment-663489312
  const dateChange = (date) => {
    handleDateChange(moment(date.toDate()))
  }

  const loadHistoryData = event => {
    const file = event.target.files[0];
    
    const readFile = new FileReader();
    readFile.readAsText(file);

    readFile.onloadend = function(){
      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(readFile.result.toString(), 'text/html');
      const results = parseData(parsedHtml.getElementsByClassName("content-cell"), selectedDate);
      const sortedChannels = sortTopResults(results.channels);
      const sortedVideos = sortTopResults(results.videos);
      const channelArray = Array.from(sortedChannels).slice(0, 20);
      const videoArray = Array.from(sortedVideos).slice(0, 20);
      setTopChannels(channelArray)
      setTopVideos(videoArray)
      setMonths(Array.from(sortTopResults(results.months)));
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

      <Typography variant="h4" gutterBottom>
        Pick a year when you upload your watch history!
      </Typography>
      <DatePicker
      autoOk
      variant="static"
        views={["year"]}
        label="Wrapped Year"
        value={selectedDate}
        onChange={dateChange}
      />
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