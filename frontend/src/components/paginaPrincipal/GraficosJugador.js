import React, { Component } from 'react'
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import axios from 'axios'

export default class paginaParaGraficos extends Component {


    
    constructor() {
        super();

        this.state = {
            totalPartidas   : 0,
            puntajeTotal: 0,
            partidasGanadas: 0,
            minutosJugados: 0,
            segundosJugados: 0
        }
        console.log('1111111111111111');
        this.consultarDatos();
        console.log('33333333333333');
        console.log(this.state);
    }
    async consultarDatos(state) {
        console.log('22222222222222');
        var correo = localStorage.getItem('correo');

        const datosConsultarGraficas = {
            "correo": correo
        };

        const res = await axios.get('http://localhost:4000/estadisticasJugador', { params: datosConsultarGraficas });
        console.log(res.data.totalPartidas,'zzz');
         this.setState  ({
            totalPartidas   : res.data.totalPartidas,
            puntajeTotal: res.data.puntajeTotal,
            partidasGanadas: res.data.partidasGanadas,
            minutosJugados: res.data.minutosJugados,
            segundosJugados: res.data.segundosJugados
            
        })
        
        console.log(this.state,'aaaaaaaaaa');
        return(this.state)

    }
     datosGraficos() {
        console.log('444444444444444');
        
         const partidasGanadas=this.state;
         console.log(partidasGanadas,":((((((((");
        return (
            <div>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    
                    data={console.log(":("),
                        [
                        ['partidas', 'Hours per Day'],
                        ['paridas ganadas',this.state.partidasGanadas ],
                        ['partidas perdidas', (this.state.totalPartidas- this.state.partidasGanadas)],

                    ]}
                    options={{
                        title: 'My Daily Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />

                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'dogs'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Time',
                        },
                        vAxis: {
                            title: 'Popularity',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        )
    }
    render() {
        console.log('55555555555555555555');
        const graficos = this.datosGraficos();
        return (
            <div className="div">
                <h1>hola</h1>

                {graficos}
            </div>



        );
    }
}
