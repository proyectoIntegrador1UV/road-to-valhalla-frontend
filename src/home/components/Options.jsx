import React from 'react';
import avatarImage from './../../assets/images/avatar.png';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';
import { Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Options() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        setAnchorEl(false);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="text-title">
                <Grid container justifyContent="center">
                    <Avatar sx={{ bgcolor: orange[500] }} variant="rounded">
                        C
                    </Avatar>
                </Grid>
                <br />
                <Typography>callmemapa</Typography>
                <br />
            </div>
            <Divider />
            <List>
                {['Mi cuenta', 'Mis quices', '¿Cómo navegar?'].map((text, index) => (
                    <ListItem key={text} disablePadding>

                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <AccountCircleIcon /> }
                                {index === 1 && <NoteAltIcon /> } 
                                {index === 2 && <AssistantDirectionIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Cerrar sesión'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <LogoutIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className='avatar'>

            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <div>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <button onClick={toggleDrawer(anchor, true)}><img src={avatarImage} height={100} alt='Avatar' /></button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>

            </Typography>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>¡Clickeame si necesitas ayuda!</Typography>
            </Popover>
        </div>
    );
}