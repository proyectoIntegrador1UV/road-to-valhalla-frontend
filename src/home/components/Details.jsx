import { Html } from '@react-three/drei';
import React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 1
};

export default function Details(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {props.description}
                    </Typography>
                </Box>
            </Modal>
            {/* <Html {...props}>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: '20px',
                            borderRadius: '10px',
                            zIndex: 9999,
                            height: '500px',
                            width: '700px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '20px',
                                cursor: 'pointer',
                                alignSelf: 'flex-end',
                            }}
                            onClick={props.handleClose}
                        >
                            X
                        </button>

                        <h2 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Arial' }}>{props.title}</h2>

                        <img
                            src={props.url_img}
                            alt="Hacha Vikinga"
                            style={{ width: '200px', height: 'auto', marginBottom: '20px' }}
                        />

                        <p style={{ color: 'white', fontFamily: 'Arial', margin: '50px' }}>
                            {props.description}
                        </p>
                    </div>
                </div>
            </Html> */}
        </>
    );
}