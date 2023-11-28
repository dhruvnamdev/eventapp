import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DateCard from './DateCard';
import LocationCard from './LocationCard';
import EventOptions from './EventOptions';
import EventList from './EventList';

const EventDetails = () => {
  const [eventName, setEventName] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [eventList, setEventList] = useState([]);
  const dateCardRef = useRef();

  const handleCreateEvent = () => {
    if (!eventName || !selectedDateRange) {
      console.log('Please provide event name and date range.');
      return;
    }
  
    const newEvent = {
      eventName,
      selectedDateRange,
    };

    console.log('Event Details:', newEvent);

    setEventList((prevEvents) => [...prevEvents, newEvent]);

    if (dateCardRef.current) {
      dateCardRef.current.clearDateValues();
    }

    setEventName('');
    setSelectedDateRange(null);
  };

  const handleDeleteEvent = (index) => {
    // Implement your logic to delete the event at the specified index
    const updatedEvents = [...eventList];
    updatedEvents.splice(index, 1);
    setEventList(updatedEvents);
  };

  return (
    <div style={{ padding: '16px', width: '50%', margin: 'auto', marginTop: '-1%', zIndex: '1' }}>
      <h2>CREATE EVENT</h2>
      <TextField
        label="Event Name"
        variant="standard"
        color="warning"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        style={{ marginBottom: '16px', width: '50%' }}
      />
      <DateCard onSelectDateRange={(dateRange) => setSelectedDateRange(dateRange)} ref={dateCardRef} />
      <LocationCard />
      <EventOptions />

      <Button
        variant="contained"
        color="primary"
        onClick={handleCreateEvent}
        style={{ marginTop: '16px', width: '50%', background: 'black' }}
      >
        Create Event
      </Button>
      <h2 style={{ maxHeight: '130px', minWidth: '25%', maxWidth: '25%', overflowY: 'auto', position: 'absolute', top: '67%', left: '50%', paddingTop: '10px', marginBottom: '15px' }}>Event List</h2>
      <EventList events={eventList} onDeleteEvent={handleDeleteEvent} />
    </div>
  );
};

export default EventDetails;
