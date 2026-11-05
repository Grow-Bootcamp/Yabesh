import { useState } from "react";

import SalesRecharts from "../components/SalesRecharts"
import SalesChartJS from "../components/SalesChartJS";

const Analytics = () => {
  const [chartLibrary, setChartLibrary] = useState<'recharts' | 'chartjs'>('recharts');

  return (
    <div>
      <h2>Sales Analytics</h2>

      <button onClick={() => setChartLibrary('recharts')}>
        Recharts
      </button>

      <button onClick={() => setChartLibrary('chartjs')}>
        Chart.js
      </button>

      {chartLibrary === 'recharts' ? (
        <SalesRecharts />
      ) : (
        <SalesChartJS/>
      )}

    </div>
  );
};

export default Analytics;