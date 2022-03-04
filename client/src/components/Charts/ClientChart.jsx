import React from 'react';
import { Chart } from 'primereact/chart';

const ClientChart = () => {
  const lineStylesData = {
    labels: ['10:40PM', '10:55PM', '11:10PM', '11:15PM', '12:45PM', '14:40PM', '16:30PM'],
    datasets: [
      {
        label: 'Количество',
        data: [2, 5, 2, 4, 5, 3, 5],
        // fill: true,
        borderColor: '#0B52E4',
        tension: .4,
        // backgroundColor: 'rgba(155,137,38,0.2)'
      }
    ]
  };

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 1.4,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    let multiAxisOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: .6,
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#495057'
          },
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          }
        }
      }
    };

    return {
      basicOptions,
      multiAxisOptions
    }
  }

  const { basicOptions } = getLightTheme();

  return (
    <div>
      <div className="card">
        <Chart type="line" data={lineStylesData} options={basicOptions} />
      </div>
    </div>
  )
}

export default ClientChart
