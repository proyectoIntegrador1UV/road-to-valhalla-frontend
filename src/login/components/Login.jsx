import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './../../style.css';
import { Grid, Card, Button, CardContent, CardActions, TextField, Box } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Loading from '../../shared/components/Loading';
import Dialog from '@mui/material/Dialog';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isCreated, setIsCreated] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsLoading(true);
        console.log('username: ' + username + ' password: ' + password);
        setTimeout(() => {
            setIsLoading(false);
            navigate(`/home`);
        }, 2000);
    }

    const handleCreateUser = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsCreated(true);
            setIsRegister(false);
        }, 2000);
    }

    const handleIsCreated = () => {
        setIsCreated(false);
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
                            <Card style={{ minWidth: 600, maxWidth: 600, height: '450px', borderRadius: '20px' }}>
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
                                        <Button variant="contained" onClick={handleSubmit}>Iniciar sesión</Button>
                                    }
                                    {isRegister &&
                                        <Button variant="contained" onClick={handleCreateUser}>Registrarme</Button>
                                    }
                                </CardActions>
                                {!isRegister &&
                                    <p className='text-login'>¿No tienes una cuenta? <a className='link' onClick={handleChange}>Creala aquí</a></p>
                                }
                                {isRegister &&
                                    <p className='text-login'>¿Ya tienes una cuenta? <a className='link' onClick={handleChange}>Inicia sesión</a></p>
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
            </div>
        </>
    )
}

export default Login;