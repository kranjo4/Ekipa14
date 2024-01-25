import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

export default function NovaMera() {
  const paperStyle = { padding: "50px 30px", width: 500, margin: "10px auto" };
  const formStyle = { display: "flex", flexDirection: "column", gap: "20px" }; // Adjust the gap as needed

  const { id } = useParams();
  const [tezaVKG, setTeza] = useState("");
  const [visinaVcm, setVisina] = useState("");
  const [starost, setStarost] = useState("");
  const [datum, setDatum] = useState("");

  useEffect(()=>{
    loadMera();
    }, []);

  const loadMera = async ()=>{
    const result = await axios.get("/mera/getMera/"+id)
    setTeza(result.data.tezaVKG)
    setVisina(result.data.visinaVcm)
    setStarost(result.data.starost)

    const datumParts = result.data.datum_vnosa.split('T');
    const datum = datumParts.length > 0 ? datumParts[0] : "";
    setDatum(datum);

    // setDatum(result.data.datum_vnosa)
    }



  


//   const datum = new Date();
//     const year = datum.getFullYear();
//     const month = (datum.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if needed
//     const day = datum.getDate().toString().padStart(2, '0'); // Add leading zero if needed

// const formatiranDatum = `${year}-${month}-${day}`;

  const handleClick = async (e) => {
    e.preventDefault();
    const mera = {tezaVKG, visinaVcm, starost, datum_vnosa: datum};
        console.log(mera)
        // await axios.post("http://localhost:8080/mera/addMera", mera);
        // // navigate("/index");

    fetch("http://localhost:8080/mera/updateMera/"+id, { //TODO id
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mera),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      window.location.href = 'http://localhost:3000/Mere'
      return response.json(); 
    });

  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "black" }}>Uredi mero</h1>
        <form style={formStyle}>
          <TextField
            id="outlinedTeza"
            label="Teza"
            variant="outlined"
            type="number"
            fullWidth
            value={tezaVKG}
            onChange={(e) => setTeza(e.target.value)}
          />
          <TextField
            id="outlinedVisina"
            label="Visina"
            variant="outlined"
            type="number"
            fullWidth
            value={visinaVcm}
            onChange={(e) => setVisina(e.target.value)}
          />
          <TextField
            id="outlinedStarost"
            label="Starost"
            variant="outlined"
            type="number"
            fullWidth
            value={starost}
            onChange={(e) => setStarost(e.target.value)}
          />
          <TextField
            hidden="True"
            id="outlinedStarost"
            label="Starost"
            variant="outlined"
            fullWidth
            value={datum}
            onChange={(e) => setDatum(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Potrdi
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
