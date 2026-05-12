import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Box, 
    Button, 
    Container, 
    TextField, 
    Typography, 
    Paper,
    CircularProgress,
    Link,
    Grid
} from '@mui/material';
import { registraPonto } from '../Service/PontoService';
import { UserAuth } from '../components/Context/UserContext';

const Registro = () => {
    const navigate = useNavigate();
    
    const {userLogado} = UserAuth()

    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    const handleRegistro = (e) => {
        e.preventDefault();
        setLoading(true);
        setErro('');

        registraPonto( userLogado.id, userLogado.token)

        navigate('/')        
        
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={6} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
                    <Typography component="h1" variant="h5" align="center" fontWeight="bold" color="primary" gutterBottom>
                        Registrar Ponto
                    </Typography>
                    
                    <Box component="form" onSubmit={handleRegistro} sx={{ mt: 3 }}>
                        {/* <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="nome"
                                    label="Nome Completo"
                                    name="nome"
                                    autoComplete="name"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="login"
                                    label="Usuário de Login"
                                    name="login"
                                    autoComplete="username"
                                    value={loginStr}
                                    onChange={(e) => setLoginStr(e.target.value)}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="senha"
                                    label="Senha"
                                    type="password"
                                    id="senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    disabled={loading}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmarSenha"
                                    label="Confirmar Senha"
                                    type="password"
                                    id="confirmarSenha"
                                    value={confirmarSenha}
                                    onChange={(e) => setConfirmarSenha(e.target.value)}
                                    disabled={loading}
                                />
                            </Grid>
                        </Grid> */}

                        {erro && (
                            <Typography color="error" variant="body2" align="center" sx={{ mt: 2 }}>
                                {erro}
                            </Typography>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.5 }}
                            disabled={loading}
                            onClick={handleRegistro}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrar Entrada'}
                        </Button>
                        
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Typography variant="body2">
                                    você entrou as 12:00h até o momento tem 4h trabalhadas
                                    
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default Registro;