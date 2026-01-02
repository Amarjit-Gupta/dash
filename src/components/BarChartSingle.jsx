import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList, Legend } from "recharts";

const BarChartSingle = () => {

  const data = [
    {
      "title": "promo1",
      "ctr": 4.5
    },
    {
      "title": "promo2",
      "ctr": 6.2
    },
    {
      "title": "promo3",
      "ctr": 5.8
    },
    {
      "title": "promo4",
      "ctr": 5.8
    }
  ];


  return (
    <div className="bg-white p-5 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
      <h2 className="text-lg font-semibold mb-3">Social impressions</h2>
      <div className="w-full min-w-0 h-60 overflow-hidden">
        <ResponsiveContainer width="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis unit="%" />
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
            <Bar dataKey="ctr" fill="#82ca9d">
              <LabelList dataKey="ctr" position="top" formatter={(value) => `${value}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartSingle;