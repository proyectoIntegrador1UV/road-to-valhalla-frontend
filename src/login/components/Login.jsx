import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './../../style.css';
import { Grid, Card, Button, CardContent, CardActions, TextField, Box } from '@mui/material';
import Loading from '../../shared/components/Loading';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsLoading(true);
        console.log('username: ' + username + ' password: ' + password);
        setTimeout(() => {
            setIsLoading(false);
            navigate(`/home`);
        }, 2000)
    }

    return (
        <>
            <div className='container'>
                {!isLoading &&
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Card style={{ minWidth: 600, maxWidth: 600, height: '380px', borderRadius: '20px' }}>
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
                                        <p className='text-login'>Login</p>
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
                                    <Button variant="contained" onClick={handleSubmit}>Iniciar sesión</Button>
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
            </div>
        </>
    )
}

export default Login;