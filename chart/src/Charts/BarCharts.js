import React,{useState, useEffect} from 'react'
import { Chart as ChartJS, BarElement} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import { LinearScale } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)

const BarChart=()=> {

   const [chart, setChart]= useState([])

  // var baseUrl = "https://api.coindesk.com/v1/bpi/currentprice.json/"
  // var proxyUrl= "https://cors-anywhere.herokuapp.com"
  // var apikey="1b7a0f3236msh296a6c29c683260p14c521jsn3b21c51655b8"
//  const [times, setTimes] = useState([]);

//   useEffect(() => {

//     fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//       .then((response) => response.json())
//       .then((responseData) => {
//         console.log("TEST");
//          console.log(responseData.time.updated);
//         setTimes(responseData.time.updated);
//          console.log("timedata");
//       })
//       .catch((error) => {});
 // })


  useEffect(()=>{
    const fetchCoins =async ()=> {
      await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((response)=>{
        response.json().then((json)=>{
          console.log(json)
          setChart(json.bpi)
           console.log(json.bpi.EUR.symbol);
        })
      }).catch(error =>{
        console.log(error);
      })
    }
    fetchCoins()

  })

  var data = {
        labels: ['EUR', "GBP", 'USD' ],
        datasets: [{
            label: `${chart?.bpi?.length} `,
            data: [38,363.5099,32,308.0127, 40,271.4504 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
      maintainAspectRatio: false,
       scales: {
            y: {
                beginAtZero: true
            }
    },
    legend:{
      labels: {
        fontSize:26
      }
    }
  }

  return(
    <div>
<Bar
      data={data}
      height={400}
      options={options}
      />
    </div>
  )

}
export default BarChart
