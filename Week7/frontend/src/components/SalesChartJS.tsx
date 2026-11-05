import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar, Line, Pie } from 'react-chartjs-2';

import { monthlySales, categoryShare } from '../data/sales';

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const SalesChartJS = () => {
  // data for bar and line charts
  const salesData = {
    labels: monthlySales.map(item => item.month),
    datasets: [
      {
        label: 'Monthly Sales',
        data: monthlySales.map(item => item.sales),
        backgroundColor: '#4f81bd',
        borderColor: '#4f81bd',
        borderWidth: 2,
      },
    ],
  };

  // data for pie chart
  const categoryData = {
    labels: categoryShare.map(item => item.name),
    datasets: [
      {
        label: 'Category Share',
        data: categoryShare.map(item => item.value),
        backgroundColor : ['#4f81bd', '#c0504d', '#9bbb59'],
      },
    ],
  };

  return (
    <div className="charts">

      <div className="chart-box">
        <h3>Chart.js Bar Chart</h3>
        <Bar data={salesData} />
      </div>

      <div className="chart-box">
        <h3>Chart.js Line Chart</h3>
        <Line data={salesData} />
      </div>

      <div className='chart-box'>
        <h3>Chart.js Pie Chart</h3>
        <Pie data={categoryData} />
      </div>

    </div>
  );
};

export default SalesChartJS;