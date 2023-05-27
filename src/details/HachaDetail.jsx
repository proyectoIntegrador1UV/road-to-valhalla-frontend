import { Html } from '@react-three/drei';
import hachaImage from './../assets/images/hachaImage.png';

export default function HachaDetail(props) {
  return (
    <>
      <Html position={[0, 0, 0]}>
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

          <h2 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Arial' }}>Hacha Vikinga</h2>

          <img
            src={hachaImage}
            alt="Hacha Vikinga"
            style={{ width: '250px', height: 'auto', marginBottom: '20px' }}
          />

          <p style={{ color: 'white', fontFamily: 'Arial'  }}>
            El hacha vikinga es un arma utilizada por los guerreros vikingos durante la era vikinga.
            Conocida por su diseño distintivo y su funcionalidad versátil, el hacha vikinga se
            caracteriza por su cabeza de doble filo y su mango largo, lo que le permite ser utilizada
            tanto para cortar como para golpear. Fue un arma importante en el arsenal vikingo y se
            utilizaba tanto en batallas como en situaciones cotidianas.
          </p>
        </div>
      </Html>
    </>
  );
}