// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Container,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   makeStyles,
// } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     marginTop: theme.spacing(2),
//     padding: theme.spacing(2),
//     backgroundColor: '#f0f0f0',
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const EventForm = ({ onAddEvent }) => {
//   const classes = useStyles();
//   const [eventName, setEventName] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [eventLocation, setEventLocation] = useState('');
//   const [tickets, setTickets] = useState(false);
//   const [requireApproval, setRequireApproval] = useState(false);
//   const [capacity, setCapacity] = useState('');
//   const [visibility, setVisibility] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedTheme, setSelectedTheme] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedFont, setSelectedFont] = useState('');

//   const handleAddEvent = () => {
//     const newEvent = {
//       name: eventName,
//       startDate,
//       endDate,
//       location: eventLocation,
//       options: {
//         tickets,
//         requireApproval,
//         capacity,
//         visibility,
//         image: selectedImage,
//         theme: selectedTheme,
//         color: selectedColor,
//         font: selectedFont,
//       },
//     };

//     onAddEvent(newEvent);

//     setEventName('');
//     setStartDate('');
//     setEndDate('');
//     setEventLocation('');
//     setTickets(false);
//     setRequireApproval(false);
//     setCapacity('');
//     setVisibility('');
//     setSelectedImage(null);
//     setSelectedTheme('');
//     setSelectedColor('');
//     setSelectedFont('');
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);
//   };

//   return (
//     <Container maxWidth="md" className={classes.formContainer}>
//       <Typography variant="h4" gutterBottom>
//         Create Event
//       </Typography>
//       <form>
//         {/* Existing form fields... */}

//         <input type="file" accept="image/*" onChange={handleImageChange} />

//         <FormControl fullWidth margin="normal">
//           <InputLabel id="theme-label">Theme</InputLabel>
//           <Select
//             labelId="theme-label"
//             value={selectedTheme}
//             onChange={(e) => setSelectedTheme(e.target.value)}
//           >
//             <MenuItem value="theme1">Theme 1</MenuItem>
//             <MenuItem value="theme2">Theme 2</MenuItem>
//             <MenuItem value="theme3">Theme 3</MenuItem>
//             <MenuItem value="theme4">Theme 4</MenuItem>
//           </Select>
//         </FormControl>

//         <TextField
//           label="Color"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={selectedColor}
//           onChange={(e) => setSelectedColor(e.target.value)}
//         />

//         <TextField
//           label="Font"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={selectedFont}
//           onChange={(e) => setSelectedFont(e.target.value)}
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           onClick={handleAddEvent}
//         >
//           Create Event
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default EventForm;
