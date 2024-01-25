import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Treningi() {

    const [treningi, setTreningi] = useState([])

    useEffect(() => {
        loadTreningi();
    }, []);

    const loadTreningi = async () => {
        const result = await axios.get("/trening/getTrening/" + sessionStorage.getItem('idPrijavljenega'))
        setTreningi(result.data)
    }

    const deleteTrening = async (id) => {
        await axios.delete(`http://localhost:8080/trening/trening/${id}`)
        loadTreningi()
    }

    return (
        <div>
            <h1>Vsi treningi</h1>
            <button className="btn btn-primary mx-2"> <a className='editButton' href={`/novTrening/${sessionStorage.getItem('idPrijavljenega')}`}>Dodaj trening</a></button>

            <div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th scope="col">Id</th>
                            <th scope="col">Datum</th>
                            <th scope="col">Čas začetka treninga</th>
                            <th scope="col">Čas trajanja treninga v minutah</th>
                            <th scope="col">Volumen v kilogramih</th>
                            <th>Uredi</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            treningi.map((trening, index) => (
                                <tr>
                                    {/* <th scope="row" key={index}>{index+1}</th> */}
                                    <td>{trening.id}</td>
                                    <td>{trening.datum}</td>
                                    <td>{trening.cas}</td>
                                    <td>{trening.trajanjeVMin}</td>
                                    <td>{trening.volumenVKG}</td>
                                    <td>
                                        {/* <button className="btn btn-primary mx-2"> <a className='editButton' href={`/editTrening/${sessionStorage.getItem('idPrijavljenega')}`}>Edit</a></button> */}
                                        <Link className="btn btn-outline-primary mx-2"
                                
                                to={`/editTrening/${trening.id}`}
                                
                                >Edit</Link>
                                        <button className="btn btn-outline-danger mx-2" onClick={() => deleteTrening(trening.id)}>Delete</button>
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

export default Treningi;