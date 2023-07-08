import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export const CheckboxList = (props) => {
  const [checked, setChecked] = React.useState('');

  const handleToggle = (value) => () => {
    if(checked === value){
      return;
    }

    setChecked(value);
    props.handleCheckAnswer(props.questionId, value);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {props.options.map((value, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={value.key}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.key)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked === value.key}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value.label}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}