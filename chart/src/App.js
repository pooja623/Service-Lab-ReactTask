import React from 'react'
import './App.css';
import BarChart from './Charts/BarCharts'
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
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Bitcoin
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                CODE
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                SYMBOL
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                RATE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">EUR</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                'EUR'
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              '&euro'
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                37,566.4673
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GBP</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                'GBP'
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                '&pound'
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                31,621.1753
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">USD</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                'USD'
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                '&#36'
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                39,507.8017
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default App;
