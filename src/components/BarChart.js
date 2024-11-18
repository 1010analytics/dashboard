import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ data, colors }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Dataset',
        data: data.values,
        backgroundColor: colors || ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)'],
        borderColor: colors || ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 205, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
