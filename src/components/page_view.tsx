import * as React from 'react';
import {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import GoogleTakeout from './google_takeout';
import DataInput from './data_input';
import Results from './results';

const STEPS = ['Go to Google Takeout', 'Upload Watch History', 'Get Results!'];

const PageView = () => {
  const [activeStep, setActiveStep] = useState(0);
  // top 20 channels
  const [topChannels, setTopChannels] = useState([])
  // top 20 videos
  const [topVideos, setTopVideos] = useState([])

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <GoogleTakeout setActiveStep={setActiveStep}/>;
      case 1:
        return <DataInput setTopChannels={setTopChannels} setTopVideos={setTopVideos} setActiveStep={setActiveStep} />;
      case 2:
        return <Results topChannels={topChannels} topVideos={topVideos} />;
    }
  }
  return (
    <>
      <Toolbar/>
      <Stepper activeStep={activeStep}>
        {STEPS.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {renderStep()}
    </>
  )
}

export default PageView;