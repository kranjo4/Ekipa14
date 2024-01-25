import * as React from 'react';
import { useState, useEffect } from 'react';
import '../components/css/EditUporabnik.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function Edittrening() {

    let navigate = useNavigate();

    const { id } = useParams();

     const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    const [trening, setTrening] = useState({
        cas: "",
        trajanjeVMin: "",
        volumenVKG: "",
        datum: ""
    });

    const { cas, trajanjeVMin, volumenVKG, datum } = trening;

    const onInputChange = (e) => {
        setTrening({ ...trening, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/trening/trening/${id}`);
                setTrening({
                    ...result.data,
                    // Format the date to show only the date part
                    datum: result.data.datum ? formatDate(result.data.datum) : "",
                });
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };

        fetchData();
    }, [id]);


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/trening/trening/${id}`, trening);
        navigate("/treningi");
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="cas" className="form-label">
                                cas
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="cas"
                                value={cas}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="trajanjeVMin" className="form-label">
                                trajanjeVMin
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your last name"
                                name="trajanjeVMin"
                                value={trajanjeVMin}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="volumenVKG" className="form-label">
                                volumenVKG
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your volumenVKG"
                                name="volumenVKG"
                                value={volumenVKG}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="datum" className="form-label">
                                datum
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Enter your datum address"
                                name="datum"
                                value={datum}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        {/* <div className="mb-3">
                <label htmlFor="Geslo" className="form-label">
                  Geslo
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  name="geslo"
                  value={geslo}
                  onChange={(e) => onInputChange(e)}
                />
              </div> */}
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/treningi">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
