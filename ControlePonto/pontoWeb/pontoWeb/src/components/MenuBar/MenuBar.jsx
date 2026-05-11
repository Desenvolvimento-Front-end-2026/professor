import { AppBar, Toolbar, Typography, Button, Box, IconButton, Avatar, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/UserContext';

const MenuBar = () => {
    const navigate = useNavigate();
    const { userLogado, logout } = UserAuth();

    const handleLoginLogout = () => {
        if (userLogado) {
            logout();
        }
        navigate('/login');
    }

    return (
        <Grid size={12}>
            <AppBar position="static" elevation={4} sx={{ borderRadius: 2, mb: 2, mt: 1, background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <AccessAlarmIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}>
                        Ponto Web
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button color="inherit" onClick={() => navigate('/')} sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                            Dashboard
                        </Button>
                        
                        {userLogado ? (
                            <>
                            <Button color="inherit" onClick={() => navigate('/registro')} sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                            Registro
                            </Button>

                                <Tooltip title={userLogado.nome}>
                                    <Avatar sx={{ bgcolor: '#ed6c02', width: 36, height: 36, fontWeight: 'bold' }}>
                                        {userLogado.nome.charAt(0).toUpperCase()}
                                    </Avatar>
                                </Tooltip>
                                <Button variant="outlined" color="inherit" onClick={handleLoginLogout} sx={{ ml: 1, borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: 'white' } }}>
                                    Sair
                                </Button>
                            </>
                        ) : (
                            <Button variant="contained" color="warning" onClick={handleLoginLogout} sx={{ fontWeight: 'bold' }}>
                                Fazer Login
                            </Button>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}

export default MenuBar;