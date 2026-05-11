import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import MenuBar from "../components/MenuBar/MenuBar";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getFuncionariosSize } from "../Service/FuncionarioService";


const DashBoard = () => {

    const [funcSize, setFuncSize] = useState(0)

    useEffect(()=>{
        const fetchFunc = async () => {
            const v = await getFuncionariosSize() 
            console.log("Valor do getFuncionariosSize :: ",v)
            setFuncSize( v )
        }
        fetchFunc()
    },[])


    return(
        <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={1}>
                    
                    <MenuBar />

                    <Grid size={4} style={{padding: '20px'}} >
                        
                        <Card elevation={4} sx={{ borderRadius: 3, background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', color: 'white' }}>
                        <CardActionArea sx={{ height: '150px' }}>
                            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h3" component="div" fontWeight="bold">
                                {funcSize}
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.9 }}>
                                Funcionários
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    </Grid>

                    <Grid size={4} style={{padding: '20px'}} >
                        
                        <Card elevation={4} sx={{ borderRadius: 3, background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)', color: 'white' }}>
                        <CardActionArea sx={{ height: '150px' }}>
                            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h3" component="div" fontWeight="bold">
                                1834
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.9 }}>
                                Horas Trabalhadas
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    </Grid>

                     <Grid size={4} style={{padding: '20px'}} >
                        
                        <Card elevation={4} sx={{ borderRadius: 3, background: 'linear-gradient(135deg, #ed6c02 0%, #e65100 100%)', color: 'white' }}>
                        <CardActionArea sx={{ height: '150px' }}>
                            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h3" component="div" fontWeight="bold">
                                18
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.9 }}>
                                Cargos
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    </Grid>

                </Grid>
        </Box>

    )


}

export default DashBoard