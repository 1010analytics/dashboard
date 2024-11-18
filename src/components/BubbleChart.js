import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: data.datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.color || 'rgba(75, 192, 192, 0.6)',
      borderColor: dataset.color ? dataset.color.replace('0.6', '1') : 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bubble Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis',
        },
      },
    },
  };

  return <Bubble data={chartData} options={options} />;
};

export default BubbleChart;
