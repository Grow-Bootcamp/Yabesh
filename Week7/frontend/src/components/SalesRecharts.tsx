import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { categoryShare, monthlySales } from '../data/sales';

const COLORS = ['#4f81bd', '#c0504d', '#9bbb59'];

const SalesRecharts = () => {
  return (
    <div className="charts">

      {/* Bar Chart */}
      <div className="chart-box">
        <h3>Bar Chart</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4f81bd" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="chart-box">
        <h3>Line Chart</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlySales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line  
              type="monotone"
              dataKey="sales"
              stroke="#c0504d"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className='chart-box'>
        <h3>Pie Chart</h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={categoryShare}
              dataKey="value"
              nameKey="name"
              label
            >
              {categoryShare.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default SalesRecharts;