import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

export default function Uporabnik() {
    const paperStyle = { padding: '50px 30px', width: 500, margin: "10px auto" };
    const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' }; // Adjust the gap as needed

    const [ime, setIme] = useState('');
    const [priimek, setPriimek] = useState('');
    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [geslo, setGeslo] = useState('');
    
    
    const handleClick = (e)=> {
        e.preventDefault()
        const uporabnik={ime, priimek, username, mail, geslo}
        // console.log(uporabnik)
        fetch("http://localhost:8080/uporabnik/addUporabnik",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(uporabnik)
        }).then(()=> {
            console.log("Dodan nov uporabnik")
        })
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "black" }}>Dodaj uporabnika</h1>
                <form style={formStyle}>
                    <TextField id="outlinedIme" label="Ime" variant="outlined" fullWidth
                        value={ime}
                        onChange={(e) => setIme(e.target.value)}
                    />
                    <TextField id="outlinedPriimek" label="Priimek" variant="outlined" fullWidth
                        value={priimek}
                        onChange={(e) => setPriimek(e.target.value)}
                    />
                        <TextField id="outlinedUsername" label="Username" variant="outlined" fullWidth
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                       />
                    <TextField id="outlinedMail" label="Gmail" variant="outlined" fullWidth
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                    />
                       <TextField id="outlinedGeslo" label="Geslo" variant="outlined" fullWidth
                        value={geslo}
                        onChange={(e) => setGeslo(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}>Potrdi</Button>

                </form>
            </Paper>
        </Container>
    );
}
