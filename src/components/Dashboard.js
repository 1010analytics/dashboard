// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import LineChart from './LineChart';
import BubbleChart from './BubbleChart';
import GaugeChart from 'react-gauge-chart';

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

  const applicationsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    applications: [120, 130, 140, 150, 160],
    shortlisted: [70, 75, 80, 85, 90],
    rejected: [30, 25, 20, 15, 10],
  };

  const bubbleData = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 20 },
        ],
        color: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 5, y: 25, r: 12 },
          { x: 25, y: 15, r: 18 },
          { x: 30, y: 20, r: 25 },
        ],
        color: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="dashboard">
      {/* Summary Section */}
      <div className="summary-boxes">
        <div className="summary-box1">
          <h4>Total Revenue</h4>
          <p>${summaryData.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="summary-box2">
          <h4>Average Churn</h4>
          <p>{summaryData.averageChurn}%</p>
        </div>
        <div className="summary-box3">
          <h4>Total Customers</h4>
          <p>{summaryData.totalCustomers}k</p>
        </div>
        <div className="summary-box4">
          <h4>Total Customers</h4>
          <p>{summaryData.totalCustomers}k</p>
        </div>
        <div className="summary-box">
          <h4>Total Revenue</h4>
          <p>${summaryData.totalRevenue.toLocaleString()}</p>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="charts-grid">

      <div className="chart">
          <h3>Recruitment Progress</h3>
          <ul className="recruitment-list">
            <li><strong>Dom Sibley</strong> - Tech Interview - DevOps</li>
            <li><strong>Joe Root</strong> - Resume Review - UI/UX Designer</li>
            <li><strong>Zak Crawley</strong> - Find Interview - .Net Developer</li>
          </ul>
        </div>

        <div className="chart">
          <h3>Working Format</h3>
          <PieChart data={{ labels: ['Hybrid', 'Onsite', 'Remote'], values: [30, 40, 30] }} />
        </div>

        <div className="chart">
          <h3>Project Employment</h3>
          <BarChart
           data={{ labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], values: [200, 150, 300, 250, 280] }}
           colors={['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']}
          />
        </div>
        
        <div className="chart">
          <h3>Turnover Insights</h3>
          <BubbleChart
            data={{
              datasets: [
                {
                  label: 'Turnover Data',
                  data: [
                    { x: 10, y: 15, r: 20 },
                    { x: 20, y: 40, r: 25 },
                    { x: 15, y: 35, r: 30 },
                  ],
                  color: 'rgba(153, 102, 255, 0.6)',
                },
              ],
            }}
          />
        </div>

        <div className="chart">
          <h3>Attendance Overview</h3>
          <BarChart
          data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'], values: [85, 90, 78, 88, 92, 120, 190, 70] }}
          colors={['#FF4500', '#32CD32', '#4682B4', '#FFD700', '#9400D3', '#00FA9A', '#FF69B4', '#1E90FF']}
          />
        </div>

        <div className="chart">
          <h3>Total Applications</h3>
          <LineChart data={applicationsData} />
        </div>

        <div className="chart">
          <h3>Staff Turnover</h3>
          <BarChart
             data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], values: [20, 25, 18, 15, 22] }}
              colors={['#FF6347', '#ADFF2F', '#00CED1', '#9370DB', '#FFA07A']}
          />
        </div>
        {/* Gauge Chart */}
      <div className="chart">
        <h3>Revenue Per Staff</h3>
        <GaugeChart
          id="revenue-gauge"
          nrOfLevels={30} // Number of segments in the gauge
          percent={0.75} // Current percentage (e.g., 75%)
          colors={['#FF0000', '#F9C802', '#A3C914']} // Red, Yellow, Green
          arcWidth={0.3} // Thickness of the arc
          textColor="#000000" // Color for the text
          formatTextValue={(value) => `$${(value * 520000).toLocaleString()}`}
        />
      </div>

        
        
       
      </div>
    </div>
  );
};

export default Dashboard;
