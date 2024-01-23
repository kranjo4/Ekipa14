import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Mere() {

    const[mere, setUporabniki]=useState([])

    useEffect(()=>{
        loadUporabniki();
    }, []);

    const loadUporabniki = async ()=>{
        const result = await axios.get("http://localhost:8080/uporabnik/getAllUporabnik")
        setUporabniki(result.data)
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
                        <th scope="col">Geslo</th>
                        <th>Uredi</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mere.map((uporabnik, index) =>(
                        <tr>
                            {/* <th scope="row" key={index}>{index+1}</th> */}
                            <td>{uporabnik.id}</td>
                            <td>{uporabnik.ime}</td>
                            <td>{uporabnik.priimek}</td>
                            <td>{uporabnik.username}</td>
                            <td>{uporabnik.mail}</td>
                            <td>{uporabnik.geslo}</td>
                            <td>
                                <button className="btn btn-primary mx-2">View</button>
                                <button className="btn btn-outline-primary mx-2">Edit</button>
                                <button className="btn btn-danger mx-2">Delete</button>
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

export default Mere;