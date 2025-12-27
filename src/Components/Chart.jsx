import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ appData }) => {
  const processedData = appData?.ratings?.map(item => ({
    name: item.name,
    count: parseFloat(item.count.replace('M', ''))
  })) || [];

 

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Rating Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={processedData}
          layout="vertical"
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            label={{ value: 'Count (Millions)', position: 'insideBottom', offset: -5 }} 
          />
          <YAxis type="category" dataKey="name" />
          <Tooltip formatter={(value) => `${value}M`} />
          <Legend />
          <Bar 
            dataKey="count" 
            name="Reviews"
            fill="#8884d8" 
            activeBar={{ fill: '#ff69b4', stroke: '#4169e1' }} 
            radius={[0, 10, 10, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;