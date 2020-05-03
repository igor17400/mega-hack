import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "Supermercado", y: 29, color: "#ff8a65"},
    {key: "Produtos de beleza", y: 0, color: "#f4c22b"},
    {key: "Gasolina", y: 32, color: "#04a9f5"},
    {key: "Comidas", y: 196, color: "#3ebfea"},
    {key: "Lojas de construção", y: 2, color: "#4F5467"},
    {key: "Compras online", y: 98, color: "#1de9b6"},
    {key: "Remédios", y: 13, color: "#a389d4"},
    {key: "Cinema", y: 5, color: "#FE8A7D"}
];

class PieDonutChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} width={700} type="pieChart" datum={datum} x="key" y="y" donut labelType='percent' />
    }
}

export default PieDonutChart;