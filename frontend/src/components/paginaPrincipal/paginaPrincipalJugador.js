import React, { Component } from 'react'

export default class paginaPrincipal extends Component {

    componentDidMount() {
        const correo = localStorage.getItem('correo');
        
    }
    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-header">
                        
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">aqui va el juego</h5>
                        
                    </div>
                </div>
            </div>
        )
    }
}
