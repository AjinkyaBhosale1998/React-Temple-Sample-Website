import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Container>
          <Grid container spacing={3} justifyContent="center" padding={'20px'}>
            <Grid item xs={4}>
              <Typography variant="h5">
                About Us
              </Typography>
              <Typography>
                Your website description goes here. Provide a brief overview of your website and its purpose.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                Features
              </Typography>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                {/* Add more features as needed */}
              </ul>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                Contact Us
              </Typography>
              <Typography>
                Email: contact@example.com
              </Typography>
              <Typography>
                Phone: +1 123-456-7890
              </Typography>
            </Grid>
          </Grid>
          <div style={{ flexGrow: 1, textAlign: 'center' }}>
            <p>&copy; 2024 Your Website Name. All rights reserved.</p>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
