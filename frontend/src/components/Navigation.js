import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                            assignment </i> NotesApp
                </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/registro" > Registro</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" > Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
