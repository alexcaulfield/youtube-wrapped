import * as React from 'react';
import {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Container from '@material-ui/core/Container';
import GoogleTakeout from './google_takeout';
import DataInput from './data_input';
import Results from './results';
import Landing from './landing';

const STEPS = ['Go to Google Takeout', 'Upload Watch History', 'Get Results!'];

const PageView = () => {
  const [activeStep, setActiveStep] = useState<number>(-1);
  // top 20 channels
  const [topChannels, setTopChannels] = useState<string[]>([])
  // top 20 videos
  const [topVideos, setTopVideos] = useState<string[]>([])
  const [months, setMonths] = useState<string[]>([])

  const renderStep = (): JSX.Element => {
    switch (activeStep) {
      case -1:
        return <Landing setActiveStep={setActiveStep} />;
      case 0:
        return <GoogleTakeout setActiveStep={setActiveStep}/>;
      case 1:
        return <DataInput setTopChannels={setTopChannels} setTopVideos={setTopVideos} setActiveStep={setActiveStep} setMonths={setMonths} />;
      case 2:
        return <Results topChannels={topChannels} topVideos={topVideos} months={months}/>;
    }
  }
  return (
    <>
      <Toolbar/>
      {activeStep >= 0 && (
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
      )}
      <Container maxWidth="xl">
        {renderStep()}
      </Container>
    </>
  )
}

export default PageView;