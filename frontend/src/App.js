import './App.css';
import {useEffect, useState} from "react";
import Plot from 'react-plotly.js';

function App() {
    const [simData, setSimData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001`, {
            method: 'POST',
            body: JSON.stringify({asdf: "hi"}),
            headers: {"Content-Type": "application/json"}
        })
            .then(res => res.json()).then(value => setSimData(value))
    }, [])
    return (
        <div className="App">
            <h1>Welcome to Car Sim!!!</h1>
            <Plot
                data={[
                    {
                        x: simData.map(datum => datum.x),
                        y: simData.map(datum => datum.y),
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'red'},
                    },
                ]}
                layout={{width: 500, height: 500, title: {text: 'Vehicle Trajectory'}}}
            />
            <Plot
                data={[
                    {
                        x: simData.map(datum => datum.t),
                        y: simData.map(datum => datum.ax),
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'blue'},
                    },
                ]}
                layout={{width: 500, height: 500, title: {text: 'Longitudinal Acceleration'}}}
            />
            <Plot
                data={[
                    {
                        x: simData.map(datum => datum.t),
                        y: simData.map(datum => datum.ay),
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: 'green'},
                    },
                ]}
                layout={{width: 500, height: 500, title: {text: 'Lateral Acceleration'}}}
            />
        </div>
    );
}

export default App;
