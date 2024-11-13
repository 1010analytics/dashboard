// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from './BarChart';
import PieChart from './PieChart';

const Dashboard = () => {
  const [grossVolumeData, setGrossVolumeData] = useState({
    labels: [],
    values: [],
  });
  const [churnRate, setChurnRate] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    const sampleData = {
      grossVolume: {
        dates: ['Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15'],
        values: [15000, 20000, 18000, 25000, 22000, 21000, 23000],
      },
      churnRate: 55.54,
      customerCount: 102.5,
    };
    setGrossVolumeData({
      labels: sampleData.grossVolume.dates,
      values: sampleData.grossVolume.values,
    });
    setChurnRate(sampleData.churnRate);
    setCustomerCount(sampleData.customerCount);
  }, []);

  return (
    <div className="dashboard">
      <div className="chart">
        <h3>Gross Volume</h3>
        <BarChart data={grossVolumeData} />
      </div>
      <div className="chart">
        <h3>Customer Churn Rate</h3>
        <PieChart data={{ churnRate }} />
      </div>
      <div className="stats">
        <h3>Customers</h3>
        <p>{customerCount}k</p>
      </div>
    </div>
  );
};

export default Dashboard;
