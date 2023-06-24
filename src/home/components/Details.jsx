import { Html } from '@react-three/drei';

export default function Details(props) {
    return (
        <>
            <Html {...props}>
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
            </Html>
        </>
    );
}