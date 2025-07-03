import React from 'react';
import ReactDOM from 'react-dom';
import RadarChart from './src/components/RadarChart'; // or whatever component you're testing

const dummyData = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [
    {
      label: 'Profile',
      data: [40, 50, 60, 70, 80],
      backgroundColor: 'rgba(0,191,198,0.2)',
      borderColor: '#00BFC6',
      borderWidth: 2
    }
  ]
};

const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Radar Chart Preview</h1>
      <RadarChart data={dummyData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));