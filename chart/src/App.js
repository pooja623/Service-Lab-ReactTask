import React from 'react'
import './App.css';
import BarChart from './Charts/BarCharts'
import Table from './Charts/Table'
//import Table from './table/Table.jsx'

function App() {
  return (
    <div className="App">

      <BarChart/>

      <div class="flex border-2 border-gray-200 rounded">
  <input type="text" class="px-4 py-2 w-80" placeholder="Search..."></input>
        <button class="px-4 text-white bg-gray-600 border-l ">
            Search
        </button>
    </div>

<Table/>

    </div>
  );
}

export default App;
