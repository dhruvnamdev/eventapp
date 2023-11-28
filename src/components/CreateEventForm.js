import React from 'react';
import EventDetails from './EventDetails';
import EventDesign from './EventDesign';


const CreateEventForm = () => {
  return (
   
    <div style={{ display: 'flex' }}>
     <EventDetails />
     <EventDesign />
    </div>
   
  );
};

export default CreateEventForm;
