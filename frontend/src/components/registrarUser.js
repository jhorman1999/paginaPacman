import React, { Component } from 'react'

import axios from 'axios';
import swal from 'sweetalert';


export default class registrarUser extends Component {

    state = {
        correo: '',
        userName: '',
        password: '',
        numberPhone: 0

    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const datosRegistro = {
            correo: this.state.correo,
            userName: this.state.userName,
            password: this.state.password,
            numberPhone: this.state.numberPhone
        };
        
        const res = await axios.post('http://localhost:4000/registro',datosRegistro);
        const resultado  =  res.data.resultadoRegisto;
        if(resultado==='true'){
            await swal({
                title: "Registro Exitoso",
                text: "",
                icon: "success",
                timer:"3000"
              });
            window.location.href = '/';
        } else {
            await swal({
                title: "El correo ya esta registrado",
                text: "Por favor, escribe otro correo",
                icon: "warning",
                timer:"3000"
              });
            
        }
     
        
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className=" card card-body">
                    <h4>registrate</h4>

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" >
                            <input type="email" placeholder="correo" required className="form-control"
                                name="correo" onChange={this.onInputChange} value={this.state.correo} />
                        </div>

                        <div className="form-group" >
                            <input type="text" placeholder="nombre" required className="form-control"
                                name="userName" onChange={this.onInputChange} value={this.state.nombre} />
                        </div>

                        <div className="form-group" >
                            <input type="password" placeholder="contraseña" required className="form-control"
                                name="password" onChange={this.onInputChange} value={this.state.password} autoComplete="nope"
                            />
                        </div>
                        <div className="form-group" >
                            <input type="number" placeholder="telefono" required className="form-control"
                                name="numberPhone" onChange={this.onInputChange} value={this.state.telefono} />
                        </div>



                        <button type="submit" className="btn btn-primary">
                            Registrar
                        </button>


                    </form>

                </div>

            </div>
        )
    }
}
