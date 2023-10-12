import { Link } from "react-router-dom";
import { API_URL, routes } from "../strings";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";

export default function ProfileEdit() {
    const { stateToken } = useContext(AppContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess("");
        setError("");
        setDisabled(true);
        const headers = { Authorization: `Bearer ${stateToken}` };
        await axios.put(`${API_URL}/api/user`,
            inputs,
            { headers },
        ).then(res => {
            setSuccess("Email berhasil diubah!");
        }).catch(error => {
            setError("Password salah!");
            console.error(error);
        })
        setDisabled(false);
    };

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="interface">
            <h3 className="i-name">
                Ubah Data
            </h3>
            {error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            {success &&
                <div className="alert alert-success">
                    {success}
                </div>
            }
            <form method="POST" onSubmit={handleSubmit}>
                <div className="change col-11">
                    <div className="mb-3 row">
                        <label for="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-5">
                            <input type="email" className="form-control" id="email" name="email" required value={inputs.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Konfirmasi Password</label>
                        <div className="col-sm-5">
                            <input type="password" autoComplete="off" className="form-control" id="password" name="password" required value={inputs.password} onChange={handleChange} />
                        </div>
                    </div>

                </div>
                <Link to={'/' + routes.profile}><button type="button" className="btn btn-outline-secondary">Batal</button></Link>
                <button disabled={disabled} type="submit" className="btn btn-danger">Simpan</button>
            </form>
        </section>
    );
}