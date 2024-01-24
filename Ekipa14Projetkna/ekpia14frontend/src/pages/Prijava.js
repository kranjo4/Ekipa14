import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

export default function Prijava() { 
    const paperStyle = { padding: '50px 30px', width: 500, margin: "10px auto" };
    const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' }; // Adjust the gap as needed

    const [mail, setMail] = useState('');
    const [geslo, setGeslo] = useState('');
    
    
    const handleClick = (e)=> {
        e.preventDefault()
        const uporabnik={mail, geslo}
        // console.log(uporabnik)
        fetch("http://localhost:8080/uporabnik/prijava",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(uporabnik)
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // This returns a promise as well
        })
        .then((data) => {
            console.log("Podatki:", data); //TODO spremeni pol da ni v konzoli
            if(data !== -1){
                window.sessionStorage.setItem('idPrijavljenega', data) //TODO ja vem da to ni varno sam jebi ga
                window.location.href = 'http://localhost:3000/Index'
            } else{
                alert("Napacno geslo ali mail") //TODO lepsi izpis
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "black" }}>Prijava</h1>
                <form style={formStyle}>
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
