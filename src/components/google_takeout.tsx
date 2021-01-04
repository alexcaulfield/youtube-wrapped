import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const GoogleTakeout = ({setActiveStep}) => {
  const images = useStaticQuery(graphql`
  query {
    imgOne: file(relativePath: { eq: "google_takeout.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgTwo: file(relativePath: { eq: "youtube_takeout.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    imgThree: file(relativePath: { eq: "youtube_settings.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return (
  <>
    <Typography variant="h3" gutterBottom>
      Google Takeout Info
    </Typography>
    <Typography variant="body1" gutterBottom>
      Go to{' '} 
      <Link 
        href="https://takeout.google.com/settings/takeout"  
        variant="body1"
        target="_blank"
        rel="noopener"
      >
        Google Takeout
      </Link>
      {' '} to download your YouTube watch history
    </Typography>

    <Typography variant="body1" gutterBottom>
      Google Takeout landing page
    </Typography>
    <Img
      fixed={images.imgOne.childImageSharp.fixed}
      alt="Google Takeout Landing"
    />
    <Typography variant="body1" gutterBottom>
      YouTube section
    </Typography>
    <Img
      fixed={images.imgTwo.childImageSharp.fixed}
      alt="YouTube section of Google Takeout"
    />
    <Typography variant="body1" gutterBottom>
      Required data to request for this app
    </Typography>
    <Img
      fixed={images.imgThree.childImageSharp.fixed}
      alt="YouTuve settings on Google Takeout"
    />
    
    <Typography variant="body1" gutterBottom>
      Once you've completed the data request above, please
    </Typography>
    <Button
      variant="contained"
      color="primary"
      onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
    >
      Continue
    </Button>
  </>
)};

export default GoogleTakeout;