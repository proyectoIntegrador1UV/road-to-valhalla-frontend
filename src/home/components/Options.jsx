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
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';
import { Button, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function Options() {

    const username = localStorage.getItem('username');
    const inicial = username.charAt(0).toLocaleUpperCase();
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

    const navigate = useNavigate();

    const handleGotoQuiz = () => {
        navigate('/quiz');
    };

    const handleGoToLogin = () => {
        navigate('/login');
    }

    const handleGoToUsers = () => {
        navigate('/users');
    }

    const handleGoToHelp = () => {
        navigate('/help');
    }

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
                        {inicial}
                    </Avatar>
                </Grid>
                <br />
                <Typography>{username}</Typography>
                <br />
            </div>
            <Divider />
            <List>
                <br/>
                <Button sx={{ color: 'black' }} onClick={handleGoToUsers}>&nbsp;<AccountCircleIcon />&nbsp; Mi cuenta</Button><br/><br/>
                <Button sx={{ color: 'black' }} onClick={handleGotoQuiz}>&nbsp;<NoteAltIcon />&nbsp; Mis quices</Button><br/><br/>
                <Button sx={{ color: 'black' }} onClick={handleGoToHelp}>&nbsp;<AssistantDirectionIcon />&nbsp; ¿Cómo navegar?</Button>
                <br/>
            </List>
            <Divider />
            <List>
                <br/>
                <Button sx={{ color: 'black' }} onClick={handleGoToLogin}>&nbsp;<LogoutIcon />&nbsp; Cerrar sesión</Button>
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