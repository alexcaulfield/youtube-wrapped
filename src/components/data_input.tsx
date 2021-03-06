import * as React from 'react';
import {useState} from 'react';
import {sortTopResults, parseData} from '../utils/parse_data';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { DatePicker } from '@material-ui/pickers';
import moment from "moment";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    marginBottom: theme.spacing(2),
  },
  datePicker: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20%',
    },
  },
  buttonContainer: {
    display: 'block',
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

const DataInput = ({setTopChannels, setTopVideos, setActiveStep, setMonths}) => {
  const classes = useStyles();
  const now = moment.utc(new Date(), 'YYYY');
  const [selectedDate, setSelectedDate] = useState(now);

  // https://github.com/mui-org/material-ui-pickers/issues/359#issuecomment-663489312
  const handleDateChange = (date) => {
    setSelectedDate(moment(date.toDate()))
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
      <Typography variant="body1" gutterBottom className={classes.body}>
        Extract the <code>.zip</code> file you've received
      </Typography>
      <Typography variant="h5" gutterBottom className={classes.body}>
        Upload your <code>watch-history.html</code> file!
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.body}>
        Which is under <code>Takeout &gt; YouTube and YouTube Music &gt; history &gt; watch-history.html</code>  
      </Typography>
      <Typography variant="h4" gutterBottom className={classes.body}>
        Pick a year when you upload your watch history!
      </Typography>
      <div className={classes.datePicker}>
        <DatePicker
          autoOk
          variant="static"
          views={["year"]}
          label="Wrapped Year"
          value={selectedDate}
          onChange={handleDateChange}
        />
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
        component="label"
      >
        Upload Watch History
        <input
          type="file"
          hidden
          value=''
          onChange={loadHistoryData}
        />
      </Button>
    </div>
    </>
  )
}

export default DataInput;