import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { orange } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import FontDownloadIcon from '@mui/icons-material/FontDownload';

export default function FontOptions() {
  return (
    <Paper sx={{ backgroundColor: orange[50], color: orange[800], width: '50%', marginTop: '40px' }}>
      <MenuList dense>
        <MenuItem>
        <ListItemIcon>
            <ColorLensIcon/>
          </ListItemIcon>
          <ListItemText inset>Color</ListItemText>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <FontDownloadIcon/>
          </ListItemIcon>
          <ListItemText inset>Font</ListItemText>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
        </MenuItem>
        </MenuList>
    </Paper>
  );
}