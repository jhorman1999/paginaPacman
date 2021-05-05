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
        }

        this.consultarDatos();

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
            jugadoresConectados: res.data.jugadoresConectados

        })



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
                                ['paridas ganadas', this.state.partidasGanadas],
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
    render() {

        const graficos = this.graficaPartidas();
        const totalPartidasAux = this.totalPartidasJugador();
        const jugadoresConectadosAux = this.jugadoresConectados();
        return (
            <div className="div">
                <div className="card">
                    {jugadoresConectadosAux}
                    {totalPartidasAux}
                    {graficos}

                </div>
            </div>



        );
    }
}
