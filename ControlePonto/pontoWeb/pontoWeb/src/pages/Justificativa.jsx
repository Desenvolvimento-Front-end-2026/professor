
import { Grid, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer,
     TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, Box, 
     Chip, TablePagination} from '@mui/material';
import MenuBar from '../components/MenuBar/MenuBar';
import { UserAuth } from '../components/Context/UserContext';
import { useEffect, useState } from 'react';
import { criarJustificativa, atualizaStatusJustificativa, getAllJustificativas } from '../Service/JustificativaService';
import { registraPontoJustificado } from '../Service/PontoService';
import { getFuncionarios } from '../Service/FuncionarioService';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


const Justificativa = () => {
    const { userLogado } = UserAuth();

    const [dtEntrada, setDtEntrada] = useState('')
    const [dtSaida, setDtSaida] = useState('')
    const [motivo, setMotivo] = useState('')

    const [listaJus, setListaJus] = useState([])
    const [funcionarios, setFuncionarios] = useState([])
    const [filtroStatus, setFiltroStatus] = useState('ALL')
    const [filtroFuncionario, setFiltroFuncionario] = useState('ALL')
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const carregarJustificativas = async () => {
        const j = await getAllJustificativas(userLogado)
        setListaJus( j || [] )
    }

    useEffect(()=>{
        const fetchJusti = async () => {
            await carregarJustificativas()
            if (userLogado?.ROLE === 'ADMIN') {
                const funcs = await getFuncionarios()
                setFuncionarios(funcs)
            }
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

            await carregarJustificativas()



    }

    const handleAprovar = async (jus) => {
        const atualizou = await atualizaStatusJustificativa(jus.id, 'APROVADO', userLogado.token)
        if (atualizou) {
            await registraPontoJustificado(jus.idUser, jus.dataEntrada, jus.dataSaida, userLogado.token)
            await carregarJustificativas()
        }
    }

    const handleReprovar = async (jus) => {
        const atualizou = await atualizaStatusJustificativa(jus.id, 'REPROVADO', userLogado.token)
        if (atualizou) {
            await carregarJustificativas()
        }
    }

    const justificativasFiltradas = listaJus && listaJus.length > 0 ? listaJus.filter(jus => {
        let statusOk = true;
        let funcOk = true;
        if (filtroStatus !== 'ALL') {
            statusOk = jus.status === filtroStatus;
        }
        if (filtroFuncionario !== 'ALL') {
            funcOk = jus.idUser === filtroFuncionario;
        }
        return statusOk && funcOk;
    }) : [];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedJustificativas = justificativasFiltradas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
                                        placeholder='mm/dd/yyyy, hh:mm'
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
                                        placeholder='mm/dd/yyyy, hh:mm'
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
                                            value={filtroStatus}
                                            onChange={(e) => setFiltroStatus(e.target.value)}
                                            label="Filtrar por Status"
                                            
                                        >
                                            <MenuItem value="ALL">TODOS</MenuItem>
                                            <MenuItem value="AGUARDANDO">AGUARDANDO</MenuItem>
                                            <MenuItem value="APROVADO">APROVADO</MenuItem>
                                            <MenuItem value="REPROVADO">REPROVADO</MenuItem>
                                        </Select>
                                    </FormControl>
                                    
                                    <FormControl sx={{ minWidth: 200 }} size="small">
                                        <InputLabel>Filtrar por Funcionário</InputLabel>
                                        <Select
                                            value={filtroFuncionario}
                                            onChange={(e) => setFiltroFuncionario(e.target.value)}
                                            label="Filtrar por Funcionário"
                                            
                                        >
                                            <MenuItem value="ALL">TODOS</MenuItem>
                                            {funcionarios.map(f => (
                                                <MenuItem key={f.id} value={f.id}>{f.nome}</MenuItem>
                                            ))}
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


                                    { paginatedJustificativas.length > 0 && 
                                        paginatedJustificativas.map( jus =>(
                                           <TableRow key={jus.id} >
                                             {userLogado?.ROLE === 'ADMIN' && 
                                            <TableCell sx={{ fontWeight: 'bold' }}>{jus.nomeUser} </TableCell>}
                                            <TableCell sx={{ fontWeight: 'bold' }}>{jus.dataEntrada}</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>{jus.dataSaida}</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>{jus.motivo}</TableCell>
                                            <TableCell sx={{ fontWeight: 'bold' }}>
                                                <Chip label={jus.status} 
                                                color={jus.status === 'AGUARDANDO'? 'primary': 
                                                    jus.status === 'APROVADO'? 'success': 'error'
                                                }
                                                />                                               
                                                </TableCell>
                                                {userLogado?.ROLE === 'ADMIN' && 
                                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                            {jus.status === 'AGUARDANDO' && (
                                                <Box display="flex" justifyContent="center">
                                                    <IconButton color="success" onClick={() => handleAprovar(jus)} title="Aprovar">
                                                        <CheckIcon />
                                                    </IconButton>
                                                    <IconButton color="error" onClick={() => handleReprovar(jus)} title="Reprovar">
                                                        <CloseIcon />
                                                    </IconButton>
                                                </Box>
                                            )}
                                        </TableCell>}
                                           </TableRow> 
                                        ))
                                    }

                                    { justificativasFiltradas.length === 0 && 
                                    <TableRow >
                                        <TableCell component="th" scope="row" colSpan={4}>
                                            não há justificativas cadastradas
                                        </TableCell>
                                    </TableRow>
                                    }
                                    
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={justificativasFiltradas.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage="Linhas por página:"
                            labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`}
                        />
                    </Paper>

                </Grid>
            </Grid>
        </Box>
    );
};



export default Justificativa;
