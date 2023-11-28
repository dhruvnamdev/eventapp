import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import FontOptions from './FontOptions';
const EventDesign = () => {
 
  return (
    <div style={{ padding: '16px', width: '50%', marginLeft: '-40%', marginTop: '5%' }}>
     <ImageUploader/>
     <FontOptions/>
    </div>
  );
};

export default EventDesign;
