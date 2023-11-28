import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { orange } from '@mui/material/colors';

const LocationCard = () => {
  const [location, setLocation] = useState('');
 

  return (
    <Card sx={{ backgroundColor: orange[50], color: orange[800], width: '50%', marginBottom: '16px' }}>
      <CardContent>
      <AddLocationIcon sx={{color: 'black', paddingTop:'15px', paddingRight:'5px'}}/>
      <TextField label="Event Location" variant="standard"
        color="warning" style={{width: '90%' }} value={location} onChange={(e) => setLocation(e.target.value)}/>
        
        
      </CardContent>
    </Card>
  );
};

export default LocationCard;



