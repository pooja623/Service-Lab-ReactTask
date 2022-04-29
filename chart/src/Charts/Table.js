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
      <h1 class="font-semibold text-3xl mb-5">Time Of Currency Updated</h1>

      <h2 class="font-normal text-2xl mb-2">Update Time : {updatedTime}</h2>

      <hr class="my-3 border-gray-300" />
      <h2 class="font-normal text-2xl mb-2">
        Update Time Iso : {updatedTimeIso}
      </h2>

      <hr class="my-3 border-gray-300" />

      <h2 class="font-normal text-2xl mb-2">
        Update Time Uk : {updatedTimeUk}
      </h2>
      <p></p>
      <hr class="my-3 border-gray-300" />

      <h2 class="font-normal text-2xl mb-2 text-center ">Disclaimer</h2>
      <p className=" text-base font-light leading-relaxed mt-0 mb-4 text-gray-800 text-center">
        {disclaimer}
      </p>
      <hr class="my-2 border-gray-300" />

      <h2 class="font-normal text-2xl mb-1 ">Chart Name : {chartName}</h2>
      <hr class="my-2" />
      <h3 class="font-semibold text-3xl mb-5">List of Coins with Rates</h3>
      <hr class="my-2 border-gray-300" />
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
