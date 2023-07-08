import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './../../style.css';
import { Grid, Card, Button, CardContent, CardActions, TextField, Box } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ErrorIcon from '@mui/icons-material/Error';
import Loading from '../../shared/components/Loading';
import Dialog from '@mui/material/Dialog';
import { getUser, updateUser } from '../../services/userService';

function Users() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isUpdated, setIsUpdated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const id = localStorage.getItem('uid');

    let isFormValid = (username !== '') && (password !== '') && (email !== '');

    const navigate = useNavigate();

    useEffect(() => {
        getUser(id).then((res) => {
            setUsername(res.data.username);
            setEmail(res.data.email);
        }).catch(() => {
            setIsError(true);
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        updateUser(username, email, password, id)
        .then((res) => {
            localStorage.setItem('username', res.data.username);
            setIsLoading(false);
            setIsUpdated(true);
        })
        .catch(() => {
            setIsLoading(false);
            setIsError(true);
        })
    }

    const handleIsUpdate = () => {
        setIsUpdated(false);
        navigate('/home');
    }

    const handleIsError = () => {
        setIsError(false);
    }

    const handleToHome = () => {
        navigate('/home');
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
                                        <h1 className='text-title'>Mi cuenta</h1>
                                        <TextField
                                            id="email"
                                            label="Correo electrónico"
                                            variant="outlined"
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{ width: '97%' }}
                                        />
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
                                            label="Confirmar contraseña"
                                            variant="outlined"
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{ width: '97%' }}
                                        />
                                    </Box>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <Button variant="contained" onClick={handleSubmit} disabled={!isFormValid}>Actualizar información</Button>
                                    <Button variant="outlined" onClick={handleToHome}>Cancelar</Button>
                                </CardActions>
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
                    open={isUpdated}
                    keepMounted
                    onClose={handleIsUpdate}
                    aria-describedby="alert-dialog-delete-cli"
                    aria-labelledby="scroll-dialog-title"
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
                            <VerifiedUserIcon color="success" />&nbsp;
                            <p>Usuario actualizado con éxito!</p>
                        </Grid>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '30px' }}>
                            <Button onClick={handleIsUpdate}>Continuar</Button>
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
                            <p>Error al intentar almacenar los datos, por favor intente nuevamente</p>
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

export default Users;