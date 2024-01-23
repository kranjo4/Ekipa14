import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Mere() {

    const[mere, setMera]=useState([])

    useEffect(()=>{
        loadMera();
    }, []);

    const loadMera = async ()=>{
        const result = await axios.get("http://localhost:8080/mera/getAllMera")
        setMera(result.data)
    }

    return (
        <div>
            <h1>Vse mere</h1>
            <div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            {/* <th></th> */}
                        <th scope="col">Id</th>
                        <th scope="col">Teza</th>
                        <th scope="col">Visina</th>
                        <th scope="col">Starost</th>
                        <th scope="col">Datum</th>
                        <th>Uredi</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mere.map((mera, index) =>(
                        <tr>
                            {/* <th scope="row" key={index}>{index+1}</th> */}
                            <td>{mera.id}</td>
                            <td>{mera.tezaVKG}</td>
                            <td>{mera.visinaVcm}</td>
                            <td>{mera.starost}</td>
                            <td>{mera.datum_vnosa}</td>
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