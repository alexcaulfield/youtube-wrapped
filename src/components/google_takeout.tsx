import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const GoogleTakeout = ({setActiveStep}) => (
  <>
    <Typography variant="h5" gutterBottom>
      Google Takeout Info
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
    >
      Next
    </Button>
  </>
);

export default GoogleTakeout;