import React, { Component } from 'react'

import { Chart } from "react-google-charts";
import axios from 'axios'



export default class paginaParaGraficos extends Component {

    state = {}

    constructor() {
        super();

        this.state = {
            totalPartidas: 0,
            puntajeTotal: 0,
            partidasGanadas: 0,
            minutosJugados: 0,
            segundosJugados: 0,
            jugadoresConectados: 0,
            tablaPuntajes: []
        }
        this.consultarDatos();
        setInterval(() => {
            this.consultarDatos();
        }, 10000);
    }
    async consultarDatos() {

        var correo = localStorage.getItem('correo');

        const datosConsultarGraficas = {
            "correo": correo
        };

        const res = await axios.get('http://localhost:4000/estadisticasJugador', { params: datosConsultarGraficas });

        this.setState({
            totalPartidas: res.data.totalPartidas,
            puntajeTotal: res.data.puntajeTotal,
            partidasGanadas: res.data.partidasGanadas,
            minutosJugados: res.data.minutosJugados,
            segundosJugados: res.data.segundosJugados,
            jugadoresConectados: res.data.jugadoresConectados,
            tablaPuntajes: res.data.tablaPuntajes,
        }
        )



    }
    graficaPartidas() {
        if (this.state.partidasGanadas === 0) {

            return (
                <div>
                    todavia no has jugado ninguna partida :(
                </div>)
        } else {
            return (
                <div>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}

                        data={
                            [
                                ['partidas', 'numero de patidas'],
                                ['partidas ganadas', this.state.partidasGanadas],
                                ['partidas perdidas', (this.state.totalPartidas - this.state.partidasGanadas)],

                            ]}
                        options={{
                            title: 'porcentaje de partidas ganadas',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>
            )
        }
    }

    totalPartidasJugador() {

        return (
            <h1>
                Total de partidas jugadas es:
                {this.state.totalPartidas}
            </h1>)
    }
    jugadoresConectados() {
        return (
            <h1>
                Jugadores conectados:
                {this.state.jugadoresConectados}
            </h1>)
    }
    puntajeTotalJugador() {
        return (
            <h1>
                tu puntaje total es:
                {this.state.puntajeTotal}
            </h1>)

    }

    tiempoJugado() {

        return (
            <h1>
                haz jugado {this.state.minutosJugados} minutos y {this.state.segundosJugados} segundos

            </h1>)
    }

    tablaPuntajesMasAltos() {



        if (this.state.tablaPuntajes.length > 0) {
            return this.state.tablaPuntajes.map((item, key) =>

                <tr key={key}>
                    <th key={key}>{item.correo} </th>
                    <th key={key + 10}> {item.puntajeTotal}</th>
                </tr>
            )
        }

        return null


    }




    render() {

        const graficos = this.graficaPartidas();
        const totalPartidasAux = this.totalPartidasJugador();
        const jugadoresConectadosAux = this.jugadoresConectados();
        const puntajeTotalJugadorAux = this.puntajeTotalJugador();
        const tiempoJugadoAux = this.tiempoJugado();
        const tablaPuntajesMasAltosAux = this.tablaPuntajesMasAltos();
        return (
            <div className="div">
                <div className="card">

                    {puntajeTotalJugadorAux}
                    {tiempoJugadoAux}
                    {jugadoresConectadosAux}
                    {totalPartidasAux}
                    {graficos}

                    <h1>
                        Top 10 jugadores
                    </h1>
                    <table>

                        <thead>
                            <tr>
                                <th>Correo</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>


                        <tbody>

                            {tablaPuntajesMasAltosAux}
                        </tbody>
                    </table>

                </div>
            </div>

        );
    }
}
