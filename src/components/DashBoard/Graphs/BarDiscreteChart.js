import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: "Cumulative Return",
        values: [{
            "label": "JAN",
            "value": -29.765957771107,
            "color": "#3ebfea"
        }, {
            "label": "FEV",
            "value": 10,
            "color": "#04a9f5"
        }, {
            "label": "MAR",
            "value": 32.807804682612,
            "color": "#ff8a65"
        }, {
            "label": "ABR",
            "value": 196.45946739256,
            "color": "#1de9b6"
        }]
    }
];

class BarDiscreteChart extends React.Component {

    render() {
        return <NVD3Chart tooltip={{enabled: true}} type="discreteBarChart" datum={datum} x="label" y="value" height={300} width={450} showValues />
    }
}

export default BarDiscreteChart;