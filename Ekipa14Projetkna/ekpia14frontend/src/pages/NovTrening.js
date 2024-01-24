import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useParams } from 'react-router-dom';

export default function NovTrening() {
  const paperStyle = { padding: "50px 30px", width: 500, margin: "10px auto" };
  const formStyle = { display: "flex", flexDirection: "column", gap: "20px" }; // Adjust the gap as needed

  const { id } = useParams();
  const [cas, setCas] = useState("");
  const [trajanjeVMin, setTrajanjeVMin] = useState("");
  const [volumenVKG, setVolumenVKG] = useState("");

  const datum = new Date();
    const formatiranDatum = `${datum.getFullYear()}-${datum.getMonth() + 1}-${datum.getDate()}`;

  const handleClick = async (e) => {
    e.preventDefault();
    const trening = {uporabnik: {id: id}, cas, trajanjeVMin, volumenVKG, datum: formatiranDatum};
        console.log(trening)
    fetch("http://localhost:8080/trening/trening", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trening),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // This returns a promise as well
    });
    // .then((data) => {
    //     console.log("Podatki:", data); //TODO spremeni pol da ni v konzoli
    //     if(data !== -1){
    //         window.sessionStorage.setItem('idPrijavljenega', data) //TODO ja vem da to ni varno sam jebi ga
    //         window.location.href = 'http://localhost:3000/Index'
    //     } else{
    //         alert("Napacno geslo ali mail") //TODO lepsi izpis
    //     }
    // })
    // .catch((error) => {
    //     console.error("Error:", error);
    // });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "black" }}>Prijava</h1>
        <form style={formStyle}>
          <TextField
            id="outlinedTeza"
            label="Teza"
            variant="outlined"
            type="number"
            fullWidth
            value={cas}
            onChange={(e) => setCas(e.target.value)}
          />
          <TextField
            id="outlinedVisina"
            label="Visina"
            variant="outlined"
            type="number"
            fullWidth
            value={trajanjeVMin}
            onChange={(e) => setTrajanjeVMin(e.target.value)}
          />
          <TextField
            id="outlinedvolumenVKG"
            label="volumenVKG"
            variant="outlined"
            type="number"
            fullWidth
            value={volumenVKG}
            onChange={(e) => setVolumenVKG(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Potrdi
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
