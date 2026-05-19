
import { Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer,
     TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import MenuBar from '../components/MenuBar/MenuBar';
import { UserAuth } from '../components/Context/UserContext';
import { useEffect, useState } from 'react';
import { criarJustificativa } from '../Service/JustificativaService';
import { getAllJustificativas } from '../Service/JustificativaService';


const Justificativa = () => {
    const { userLogado } = UserAuth();

    const [dtEntrada, setDtEntrada] = useState('')
    const [dtSaida, setDtSaida] = useState('')
    const [motivo, setMotivo] = useState('')

    const [listaJus, setListaJus] = useState('')

    useEffect(()=>{
        const fetchJusti = async () => {
            const j = await getAllJustificativas(userLogado)

            setListaJus( j )
        }
        fetchJusti()

    },[userLogado])

    const handleCreateJustificativa = async ()=>{

        await criarJustificativa(userLogado.id, 
            new Date(dtEntrada), new Date(dtSaida), motivo, 
            userLogado.token)

            setDtEntrada('')
            setDtSaida('')
            setMotivo('')

    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <MenuBar />

                <Grid item xs={12} sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
                        Justificativas
                    </Typography>

                    <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                        <Typography variant="h6" gutterBottom>Nova Justificativa</Typography>
                        
                            <Grid container spacing={2} alignItems="center">
                                
                                <Grid item xs={12} md={userLogado?.ROLE === 'ADMIN' ? 3 : 4}>
                                    <TextField
                                        fullWidth
                                        label="Data de Entrada"
                                        // type="datetime-local"
                                        type='text'
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        value={dtEntrada}
                                        onChange={ e => setDtEntrada(e.target.value)}
                                        placeholder='dd/mm/yyyy, hh:mm'
                                    />
                                </Grid>
                                <Grid item xs={12} md={userLogado?.ROLE === 'ADMIN' ? 3 : 4}>
                                    <TextField
                                        fullWidth
                                        label="Data de Saída"
                                        // type="datetime-local"
                                        type='text'
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        value={dtSaida}
                                        onChange={ e => setDtSaida(e.target.value)}
                                        placeholder='dd/mm/yyyy, hh:mm'
                                    />
                                </Grid>
                                <Grid item xs={12} md={userLogado?.ROLE === 'ADMIN' ? 12 : 4}>
                                    <TextField
                                        fullWidth
                                        label="Motivo"
                                        required
                                        value={motivo}
                                        onChange={ e => setMotivo(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" 
                                    onClick={handleCreateJustificativa}
                                    sx={{ fontWeight: 'bold' }}>
                                        Solicitar Justificativa
                                    </Button>
                                </Grid>
                            </Grid>
                    </Paper>

                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap" gap={2}>
                            <Typography variant="h6">{userLogado?.ROLE === 'ADMIN' ? 'Todas as Justificativas' : 'Minhas Justificativas'}</Typography>

                            {userLogado?.ROLE === 'ADMIN' && (
                                <Box display="flex" gap={2}>
                                    <FormControl sx={{ minWidth: 200 }} size="small">
                                        <InputLabel>Filtrar por Status</InputLabel>
                                        <Select
                                        
                                            label="Filtrar por Status"
                                            
                                        >
                                            <MenuItem value="ALL">TODOS</MenuItem>
                                            <MenuItem value="PENDENTE">PENDENTE</MenuItem>
                                            <MenuItem value="APROVADO">APROVADO</MenuItem>
                                            <MenuItem value="REJEITADO">REJEITADO</MenuItem>
                                        </Select>
                                    </FormControl>
                                    
                                    <FormControl sx={{ minWidth: 200 }} size="small">
                                        <InputLabel>Filtrar por Funcionário</InputLabel>
                                        <Select
                                        
                                            label="Filtrar por Funcionário"
                                            
                                        >
                                            <MenuItem value="ALL">TODOS</MenuItem>
                                            
                                        </Select>
                                    </FormControl>
                                </Box>
                            )}
                        </Box>

                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                                        {userLogado?.ROLE === 'ADMIN' && 
                                        <TableCell sx={{ fontWeight: 'bold' }}>Funcionário</TableCell>}
                                        <TableCell sx={{ fontWeight: 'bold' }}>Entrada</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Saída</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Motivo</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                        {userLogado?.ROLE === 'ADMIN' && 
                                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Ações</TableCell>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { listaJus.length === 0 && 
                                    <TableRow >
                                        <TableCell component="th" scope="row" colSpan={4}>
                                            não há justificativas cadastradas
                                        </TableCell>
                                    </TableRow>
                                    }
                                    
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>
            </Grid>
        </Box>
    );
};



export default Justificativa;
