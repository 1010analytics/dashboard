
// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

const Dashboard = () => {
  const [grossVolumeData, setGrossVolumeData] = useState({ labels: [], values: [] });
  const [salesData, setSalesData] = useState({ labels: [], values: [] });
  const [summaryData, setSummaryData] = useState({ totalRevenue: 0, averageChurn: 0, totalCustomers: 0 });

  useEffect(() => {
    const sampleData = {
      grossVolume: { dates: ['Apr 9', 'Apr 10', 'Apr 11', 'Apr 12'], values: [15000, 20000, 18000, 25000] },
      sales: { dates: ['Apr 9', 'Apr 10', 'Apr 11', 'Apr 12'], values: [5000, 7000, 8000, 10000] },
      churnRate: 55.54,
      customerCount: 102.5,
    };
    setGrossVolumeData({ labels: sampleData.grossVolume.dates, values: sampleData.grossVolume.values });
    setSalesData({ labels: sampleData.sales.dates, values: sampleData.sales.values });
    setSummaryData({
      totalRevenue: sampleData.grossVolume.values.reduce((a, b) => a + b, 0),
      averageChurn: sampleData.churnRate,
      totalCustomers: sampleData.customerCount,
    });
  }, []);

  return (
    <div className="dashboard">
      {/* Summary Section */}
      <div className="summary-boxes">
        <div className="summary-box">
          <h4>Total Revenue</h4>
          <p>${summaryData.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="summary-box">
          <h4>Average Churn</h4>
          <p>{summaryData.averageChurn}%</p>
        </div>
        <div className="summary-box">
          <h4>Total Customers</h4>
          <p>{summaryData.totalCustomers}k</p>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="charts-grid">
        <div className="chart">
          <h3>Working Format</h3>
          <PieChart data={{ labels: ['Hybrid', 'Onsite', 'Remote'], values: [30, 40, 30] }} />
        </div>

        <div className="chart">
          <h3>Project Employment</h3>
          <BarChart data={{ labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [200, 150, 300, 250, 280] }} />
        </div>

        <div className="chart">
          <h3>Attendance Overview</h3>
          <BarChart data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], values: [85, 90, 78, 88, 92] }} />
        </div>

        <div className="chart">
          <h3>Total Applications</h3>
          <LineChart data={{ labels: ['Applications', 'Shortlisted', 'On-Hold', 'Rejected'], values: [120, 80, 40, 30] }} />
        </div>

        <div className="chart">
          <h3>Staff Turnover</h3>
          <BarChart data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], values: [20, 25, 18, 15, 22] }} />
        </div>

        <div className="chart">
          <h3>Recruitment Progress</h3>
          <ul className="recruitment-list">
            <li><strong>Dom Sibley</strong> - Tech Interview - DevOps</li>
            <li><strong>Joe Root</strong> - Resume Review - UI/UX Designer</li>
            <li><strong>Zak Crawley</strong> - Find Interview - .Net Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
