import React, { Component } from 'react'

import axios from 'axios'
import swal from 'sweetalert';


export default class login extends Component {
    state = {
        correo: '',
        password: ''
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const datosLogin = {
            correo: this.state.correo,
            password: this.state.password,
        };

        const res = await axios.post('http://localhost:4000/', datosLogin);
        const resultado = res.data.resultadoLogin;
        if (resultado === 'true') {
            window.location.href = '/paginaPrincipal';
        } else {
            await swal({
                title: "El correo o la contraseña son incorrectos",
                text: "Vuelve a intentarlo otra vez",
                icon: "warning",
                timer: "4000"
            });

        }
    }

    render() {
        return (
            <div>
                <div className="card card-body col-md-6 offset-md-3">
                    <h3>
                        Login
                    </h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" >
                            <input type="email" placeholder="correo" required className="form-control"
                                name="correo" onChange={this.onInputChange} value={this.state.correo} />
                        </div>

                        <div className="form-group" >
                            <input type="password" placeholder="contraseña" required className="form-control"
                                name="password" onChange={this.onInputChange} value={this.state.password} autoComplete="nope"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            ingresar
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
