import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './../../style.css';
import { Grid, Card, Button, CardContent, CardActions, TextField, Box } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ErrorIcon from '@mui/icons-material/Error';
import Loading from '../../shared/components/Loading';
import Dialog from '@mui/material/Dialog';
import { authUser, registerUser } from './../../services/authService';

function Login({ setIsToken }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCreated, setIsCreated] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isErrorCreated, setIsErrorCreated] = useState(false);

    let isFormLoginValid = (username !== '') && (password !== '');
    let isFormRegisterValid = (isFormLoginValid) && (email !== '');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        authUser(username, password)
        .then((res) => {
            localStorage.setItem('jwt', res.data.jwt);
            setIsLoading(false);
            setIsToken(true);
            navigate(`/home`);
        })
        .catch(() => {
            setIsLoading(false);
            setIsError(true);
        })
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        setIsLoading(true);
        registerUser(username, email, password)
        .then(() => {
            setIsLoading(false);
            setIsCreated(true);
            setIsRegister(false);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
            setIsErrorCreated(true);
        })
    }

    const handleIsCreated = () => {
        setIsCreated(false);
    }

    const handleIsError = () => {
        setIsError(false);
        setIsErrorCreated(false);
    }

    const handleChange = () => {
        if (isRegister) {
            setIsRegister(false);
        } else {
            setIsRegister(true);
        }
    }

    return (
        <>
            <div className='container'>
                {!isLoading &&
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Card style={{ minWidth: 600, maxWidth: 600, height: '100%', minHeight: '450px', borderRadius: '20px' }}>
                                <CardContent style={{ justifyContent: 'center' }}>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '100%' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <h1 className='text-title'>Road to Valhalla</h1>
                                        {!isRegister &&
                                            <p className='text-login'>Login</p>
                                        }
                                        {isRegister &&
                                            <p className='text-login'>Register</p>
                                        }
                                        {isRegister &&
                                            <TextField
                                                id="email"
                                                label="Correo electrónico"
                                                variant="outlined"
                                                type='email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                style={{ width: '97%' }}
                                            />
                                        }
                                        <TextField
                                            id="username"
                                            label="Usuario"
                                            variant="outlined"
                                            type='text'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            style={{ width: '97%' }}
                                        />
                                        <br />
                                        <TextField
                                            id="password"
                                            label="Contraseña"
                                            variant="outlined"
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ width: '97%' }}
                                        />
                                    </Box>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    {!isRegister &&
                                        <Button variant="contained" onClick={handleSubmit} disabled={!isFormLoginValid}>Iniciar sesión</Button>
                                    }
                                    {isRegister &&
                                        <Button variant="contained" onClick={handleCreateUser} disabled={!isFormRegisterValid}>Registrarme</Button>
                                    }
                                </CardActions>
                                {!isRegister &&
                                    <p className='text-login'>¿No tienes una cuenta? <a className='link' onClick={handleChange}>Creala aquí</a></p>
                                }
                                {isRegister &&
                                    <p className='text-login' style={{ paddingBottom: '60px' }}>¿Ya tienes una cuenta? <a className='link' onClick={handleChange}>Inicia sesión</a></p>
                                }
                            </Card>
                        </Grid>
                    </Grid>
                }
                {isLoading &&
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Loading />
                        </Grid>
                    </Grid>
                }
                <Dialog
                    open={isCreated}
                    keepMounted
                    onClose={handleIsCreated}
                    aria-describedby="alert-dialog-delete-cli"
                    aria-labelledby="scroll-dialog-title"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                            <VerifiedUserIcon color="success" />&nbsp;
                            <p>Usuario creado con éxito! Ahora debe iniciar sesión</p>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px' }}>
                            <Button onClick={handleIsCreated}>Continuar</Button>
                        </Grid>
                    </Grid>
                </Dialog>
                <Dialog
                    open={isErrorCreated}
                    keepMounted
                    onClose={handleIsError}
                    aria-describedby="alert-dialog-delete-cli"
                    aria-labelledby="scroll-dialog-title"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                            <ErrorIcon color="error" />&nbsp;
                            <p>El usuario no se pudo crear con éxito, por favor intente nuevamente</p>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px' }}>
                            <Button onClick={handleIsError}>Reintentar</Button>
                        </Grid>
                    </Grid>
                </Dialog>
                <Dialog
                    open={isError}
                    keepMounted
                    onClose={handleIsError}
                    aria-describedby="alert-dialog-delete-cli"
                    aria-labelledby="scroll-dialog-title"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                            <ErrorIcon color="error" />&nbsp;
                            <p>Error al iniciar sesión, por favor validar las credenciales</p>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px' }}>
                            <Button onClick={handleIsError}>Reintentar</Button>
                        </Grid>
                    </Grid>
                </Dialog>
            </div>
        </>
    )
}

export default Login;