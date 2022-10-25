import React from 'react';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto'; //eslint-disable-line

const RecordsBoard = () => (

  <div className="rboard">
    <div className="rcard-container">
      <div className="rboard-card">

        <div className="title">Total Number of tools in TRMS</div>
        <h1 className="data">1580</h1>

      </div>

      <div className="rboard-card">
        <div className="title">Number of tools with Missing information</div>

        <h1 className="data">865</h1>

      </div>

      <div className="rboard-card">
        <div className="title">% of tools with missing information</div>

        <h1 className="data">23%</h1>

      </div>



      <div className="rboard-card">
        <div className="title">Number of tools edited with TRMS</div>
        <h1 className="data">540</h1>

      </div>



    </div>

    <div className='data-stats'>

      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: ["Total number of Tools", "Number of tools with missing information", "Number of tools edited with TRMS"],
          datasets: [
            {
              
              label: "total number of tools edited with TRMS",
              data: [1580, 865, 540],
              backgroundColor: ["aqua", "green", "red"],
              borderColor: ["aqua", "green", "red"],
              borderWidth: 1,
            },

            
          ],
        }}
     
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 17,
            },
          },
        }}
      />
    </div>

  </div>





);

export default RecordsBoard;