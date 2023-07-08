import { Html } from '@react-three/drei';
import Modal from '@mui/material/Modal';

export default function Details(props) {

    return (

            <Html {...props} occlude={true}>
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
                            top: '0%',
                            bottom: '0%',
                            left: '0%',
                            right: '0%',
                            transform: 'translate(-50%,-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: '20px',
                            borderRadius: '10px',
                            zIndex: 9999999,
                            height: '500px',
                            width: '700px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
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
            </Html>
    );
}