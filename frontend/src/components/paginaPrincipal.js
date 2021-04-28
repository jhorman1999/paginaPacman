import React, { Component } from 'react'

export default class paginaPrincipal extends Component {

    componentDidMount(){
        const correo = localStorage.getItem('correo');
               
        console.log(correo,'pagina principa');
    }
    render() {
        return (
            <div>
                hola
            </div>
        )
    }
}
