import React, { Component } from 'react'

export default class paginaPrincipal extends Component {

    componentDidMount() {
        const correo = localStorage.getItem('correo');
        
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">aqui va el juego</h5>
                        
                    </div>
                </div>
            </div>
        )
    }
}
