import * as React from 'react';
import { useState, useEffect } from 'react';
import '../components/css/EditUporabnik.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditUporabnik() {

    let navigate=useNavigate();

    const {id}=useParams();


    const [uporabnik, setUporabnik] = useState({
        ime: "",
        priimek:"",
        username: "",
        mail: "",
        geslo:""
      });

      const {ime, priimek, username, mail, geslo} = uporabnik;

      const onInputChange = (e) => {
        setUporabnik({ ...uporabnik, [e.target.name]: e.target.value });
    };
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await axios.get(`http://localhost:8080/uporabnik/getUporabnikById/${id}`);
            setUporabnik(result.data);
          } catch (error) {
            console.error('Error loading user data:', error);
          }
        };
      
        fetchData();
      }, [id]);
      

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/uporabnik/uporabnik/${id}`, uporabnik);
        navigate("/crud");
      };

      
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Ime" className="form-label">
                  Ime
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="ime"
                  value={ime}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Priimek" className="form-label">
                  Priimek
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  name="priimek"
                  value={priimek}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="mail"
                  value={mail}
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
              <Link className="btn btn-outline-danger mx-2" to="/crud">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}
