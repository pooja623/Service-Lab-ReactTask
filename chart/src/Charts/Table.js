import React, { useState, useEffect } from "react";
import { Container } from "postcss";
import { render } from "@testing-library/react";

function Table() {
  const [updatedTime, setUpdatedTime] = useState([]);
  const [updatedTimeIso, setUpdateTimeIso] = useState([]);
  const [updatedTimeUk, setUpdatedTimeUk] = useState([]);
  const [disclaimer, setDisclaimer] = useState([]);
  const [chartName, setChartName] = useState([]);

  const [bpi, setBpi] = useState([]);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData.time.updated);
        setUpdatedTime(responseData.time.updated);
        setUpdateTimeIso(responseData.time.updatedISO);
        setUpdatedTimeUk(responseData.time.updateduk);
        setDisclaimer(responseData.disclaimer);
        setChartName(responseData.chartName);

        const responseBpi = responseData.bpi;

        console.log("first" + responseBpi.USD.code);

        setBpi(responseBpi);
      })
      .catch((error) => {});
  });

  function bpiMap() {
    // return
  }

  return (
    <div class="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
      <h1>Update : {updatedTime}</h1>
      <h1>UpdateIso : {updatedTimeIso}</h1>
      <h1>UpdateUk : {updatedTimeUk}</h1>
      <h1>Disclaimer : {disclaimer}</h1>
      <h1>chartName : {chartName}</h1>

      {/* {Object.keys(bpi).length > 0 && (
        <table className="flex flex-col">
          <thead>
            <tr>
              <th className="text-align:center">Code</th>
              <th>Symbol</th>
              <th>Rate</th>
              <th>Description</th>
              <th>Rate Float</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(bpi).length > 0 &&
              Object.keys(bpi).map((item) => (
                <tr>
                  <td>{bpi[item].code}</td>
                  <td>{bpi[item].symbol}</td>
                  <td>{bpi[item].rate}</td>
                  <td>{bpi[item].description}</td>
                  <td>{bpi[item].rate_float}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )} */}

      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Symbol
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                    >
                      Description
                    </th>

                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Rate Float
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(bpi).length > 0 &&
                    Object.keys(bpi).map((item) => (
                      <tr class="border-b">
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {bpi[item].code}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {bpi[item].symbol}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {bpi[item].rate}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          {bpi[item].description}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          <td>{bpi[item].rate_float}</td>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
