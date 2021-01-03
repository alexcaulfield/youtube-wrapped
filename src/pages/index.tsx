import * as React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PageView from '../components/page_view';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" gutterBottom>
            YouTube Wrapped
          </Typography>
        </Toolbar>
      </AppBar>
      <PageView />
    </main>
  )
}

export default IndexPage
