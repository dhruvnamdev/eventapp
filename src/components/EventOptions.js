import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ApprovalIcon from '@mui/icons-material/Approval';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { orange } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import PublicIcon from '@mui/icons-material/Public';

export default function EventOptions() {
  return (
    <Paper sx={{ backgroundColor: orange[50], color: orange[800], width: '50%', marginBottom: '16px' }}>
      <MenuList dense>
        <MenuItem>
        <ListItemIcon>
            <ConfirmationNumberIcon/>
          </ListItemIcon>
          <ListItemText inset>Tickets</ListItemText>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ApprovalIcon/>
          </ListItemIcon>
          <ListItemText inset>Require Approval</ListItemText>
          <ListItemIcon>
            <ToggleOffIcon/>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        <MenuItem>
        <ListItemIcon>
            <Diversity3Icon/>
          </ListItemIcon>
          <ListItemText inset>Capacity</ListItemText>
          <ListItemIcon>
            <EditIcon/>
          </ListItemIcon>
        </MenuItem>
        <Divider/>
        <MenuItem>
        <ListItemIcon>
            <VisibilityIcon/>
          </ListItemIcon>
          <ListItemText inset>Visibility</ListItemText>
          <ListItemIcon>
            <PublicIcon/>
          </ListItemIcon>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
