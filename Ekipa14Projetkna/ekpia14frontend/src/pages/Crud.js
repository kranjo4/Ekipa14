import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Crud() {

    const[uporabniki, setUporabniki]=useState([])

    const {id}=useParams();

    useEffect(()=>{
        loadUporabniki();
    }, []);

    const loadUporabniki = async ()=>{
        const result = await axios.get("http://localhost:8080/uporabnik/getAllUporabnik")
        setUporabniki(result.data)
    }

    const deleteUporabnik= async (id)=>{
        await axios.delete(`http://localhost:8080/uporabnik/uporabnik/${id}`)
        loadUporabniki()
    }

    return (
        <div>
            <h1>CRUD Page</h1>
            <div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            {/* <th></th> */}
                        <th scope="col">Id</th>
                        <th scope="col">Ime</th>
                        <th scope="col">Priimek</th>
                        <th scope="col">Username</th>
                        <th scope="col">Gmail</th>
                        {/* <th scope="col">Geslo</th> */}
                        <th>Uredi</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            uporabniki.map((uporabnik, index) =>(
                        <tr>
                            {/* <th scope="row" key={index}>{index+1}</th> */}
                            <td>{uporabnik.id}</td>
                            <td>{uporabnik.ime}</td>
                            <td>{uporabnik.priimek}</td>
                            <td>{uporabnik.username}</td>
                            <td>{uporabnik.mail}</td>
                            {/* <td>{uporabnik.geslo}</td> */}
                            <td>
                                {/* <button className="btn btn-primary mx-2">View</button> */}
                                <Link className="btn btn-outline-primary mx-2"
                                
                                to={`/edituser/${uporabnik.id}`}
                                
                                >Edit</Link>
                                <button className="btn btn-outline-danger mx-2" onClick={()=> deleteUporabnik(uporabnik.id)}>
                                    Delete</button>
                            </td>
                        </tr>
                                ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Crud;
