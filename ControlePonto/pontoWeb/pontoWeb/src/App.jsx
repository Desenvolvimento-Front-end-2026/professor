import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import './App.css'
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

function App() {

  return (
    <>
      <section id="center">
        <HomeIcon />
        <AccessAlarmIcon />

        <TextField id="outlined-basic" label="Nome" variant="outlined"
        style={{width: '150px', backgroundColor: '#fff'}} />

        <Switch defaultChecked />

        <Button variant="contained">Contained</Button>
        <button>Botão</button>
       
      </section>

    </>
  )
}

export default App
