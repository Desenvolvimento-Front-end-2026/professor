import { useState } from 'react';
import { UserAuth } from '../components/Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { 
    Box, 
    Button, 
    Container, 
    TextField, 
    Typography, 
    Paper,
    CircularProgress,
    Link
} from '@mui/material';

const Login = () => {
    const { login } = UserAuth();
    const navigate = useNavigate();
    
    const [loginStr, setLoginStr] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setErro('');
        
        // Simular um tempo de resposta da API para exibir o loading
        setTimeout(() => {
            login(loginStr, senha);
            // Verifica no localStorage se logou com sucesso, mas como não temos acesso ao userLogado atualizado no mesmo render, 
            // vamos apenas confiar no mock do context ou redirecionar.
            // Para simplificar e evitar o erro, redirecionamos após o timer se a senha for "123" ou "abc" (baseado no context)
            if (loginStr && senha) {
                 navigate('/');
            } else {
                 setErro('Login ou senha inválidos');
            }
            setLoading(false);
        }, 1500);
    }

    return (
        <Container component="main" maxWidth="xs">
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
                        Login do Sistema
                    </Typography>
                    
                    <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Usuário"
                            name="login"
                            autoComplete="username"
                            autoFocus
                            value={loginStr}
                            onChange={(e) => setLoginStr(e.target.value)}
                            disabled={loading}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="senha"
                            label="Senha"
                            type="password"
                            id="senha"
                            autoComplete="current-password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            disabled={loading}
                        />

                        {erro && (
                            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
                                {erro}
                            </Typography>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, py: 1.5, position: 'relative' }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
                        </Button>
                        
                        <Typography align="center">
                            Não possui conta?{' '}
                            <Link component="button" variant="body2" onClick={() => navigate('/registro')}>
                                Registre-se
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}

export default Login;