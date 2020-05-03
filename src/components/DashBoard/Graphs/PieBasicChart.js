import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "Supermercado", y: 29, color: "#ff8a65"},
    {key: "Produtos de beleza", y: 0, color: "#f4c22b"},
    {key: "Comidas", y: 32, color: "#04a9f5"},
    {key: "Compras online", y: 196, color: "#3ebfea"},
    {key: "R", y: 2, color: "#4F5467"},
    {key: "Remédios", y: 98, color: "#1de9b6"},
    {key: "Seven", y: 13, color: "#a389d4"},
    {key: "Eight", y: 5, color: "#FE8A7D"}
];

class PieBasicChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} width={800} type="pieChart" datum={datum} x="key" y="y"  />
    }
}

export default PieBasicChart;