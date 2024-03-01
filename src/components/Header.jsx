import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import omm from './assets/omm.jpg';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <img
              src={omm}
              alt="Logo"
              style={{ width: '100px', height: '50px', marginRight: '10px' }}
            />
            <Typography color="inherit" variant="h5" style={{ margin: '10px' }}>
              Home
            </Typography>
            <Typography color="inherit" variant="h5" style={{ margin: '10px' }}>
              About
            </Typography>
            <Typography color="inherit" variant="h5" style={{ margin: '10px' }}>
              Contact
            </Typography>
            <div style={{ flexGrow: 1 }} /> {/* Pushes icons to the right */}
            <CallIcon style={{ margin: '10px' }} />
            <LocationOnIcon style={{ margin: '10px' }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
