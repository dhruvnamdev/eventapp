import React, { useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoIcon from '@mui/icons-material/Photo'; // Import the Photo icon from Material-UI

 

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: '50%', maxHeight: '300px' }}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + '/images/initial-image.jpg'}
          alt="Initial"
          style={{ maxWidth: '50%', maxHeight: '300px' }}
        />
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
       <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={handleButtonClick}
        style={{ marginTop: '16px' }}
      >
        <PhotoIcon fontSize="medium" style={{ color: 'black' }} />
      </IconButton>
    </div>
  );
};

export default ImageUploader;
