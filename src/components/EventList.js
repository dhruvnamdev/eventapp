import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { orange } from '@mui/material/colors';

const EventList = ({ events, onDeleteEvent }) => {
  if (!events || !Array.isArray(events) || events.length === 0) {
    return <div style={{ maxHeight: '130px', minWidth:'25%',maxWidth:'25%', overflowY: 'auto',  position: 'absolute',top: '75%', left: '50%',marginTop: '15px' }}>
      <Card sx={{ backgroundColor: orange[50], color: orange[800], marginBottom: '6px' }}>
          <CardContent>
            <Typography variant="h12" component="div">
            No events to display, please create an event using name and start date-end date.
            </Typography>
            </CardContent>
            </Card>
            </div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T').join(' ').slice(0, 16);;
    return formattedDate;
  };

  return (
    
    <div style={{ maxHeight: '130px', minWidth:'25%',maxWidth:'25%', overflowY: 'auto',  position: 'absolute',top: '75%', left: '50%',marginTop: '15px' }}>
       <style>
        {`
          ::-webkit-scrollbar {
            width: 8px; /* Adjust the width as needed */
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${orange[800]};
            border-radius: 4px; /* Make it round */
          }

          ::-webkit-scrollbar-track {
            background-color: ${orange[50]};
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: ${orange[600]};
          }
        `}
      </style>
      
      {events.map((event, index) => (
        <Card key={index} sx={{ backgroundColor: orange[50], color: orange[800], marginBottom: '6px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {event.eventName}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Start Date: {formatDate(event.selectedDateRange.startDate)}
            </Typography>
            <Typography color="textSecondary">
              End Date:    {formatDate(event.selectedDateRange.endDate)}
            </Typography>
            {/* Display other event details as needed */}
            <IconButton
            onClick={() => onDeleteEvent(index)}
            color="black"
            style={{ position: 'absolute',top:'40px', right: '8px' }}
          >
            <DeleteIcon />
          </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
