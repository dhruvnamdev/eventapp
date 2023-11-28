import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { orange } from '@mui/material/colors';

const DateCard = forwardRef(({ onSelectDateRange }, ref) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = () => {
    // Call the onSelectDateRange callback with the selected start and end dates
    onSelectDateRange({
      startDate,
      endDate,
    });
  };

  // Function to clear date values
  const clearDateValues = () => {
    setStartDate('');
    setEndDate('');
  };

  // Expose the clearDateValues function to the parent component
  useImperativeHandle(ref, () => ({
    clearDateValues,
  }));

  return (
    <Card sx={{ backgroundColor: orange[50], color: orange[800], width: '50%', marginBottom: '16px' }}>
      <CardContent>
        Start Date
        <TextField class="datefield"
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={handleDateChange} // Call the callback when the input field loses focus
          style={{ marginBottom: '5px', zIndex: 1 }}
        />
        {/* Add other TextField components or content as needed */}
        End Date
        <TextField class="datefield"
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onBlur={handleDateChange} // Call the callback when the input field loses focus
        />
      </CardContent>
    </Card>
  );
});

export default DateCard;
