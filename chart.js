import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = () => {
  const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 120 },
    { name: 'Mar', value: 140 },
    { name: 'Apr', value: 160 },
    { name: 'May', value: 180 },
  ];

  return (
    <LineChart width={400} height={200} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;