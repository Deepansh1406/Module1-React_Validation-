import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../assets/Components/Login';
import SignUp from '../assets/Components/Signup';
import { Paper } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = { width: '600px'  , margin:"20px auto"};
  return (
   <Paper elevation={20} style={paperStyle}>
     <Box>
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Login" {...a11yProps(0)} sx={{ width: '50%' }} />
            <Tab label="SignUp" {...a11yProps(1)} sx={{ width: '50%' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
        <Login/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SignUp/>
      </CustomTabPanel>
      
    </Box>
   </Paper>
  );
}