// import { useEffect, useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// const Total = () => {



// const data = [
//     {
//       "name": "promo1",
//       "value": 500
//     },
//     {
//       "name": "promo2",
//       "value": 700
//     },
//     {
//       "name": "promo3",
//       "value": 200
//     }
//   ]

//   const total = data.reduce((sum, device) => sum + device.value, 0);

//   const dataWithPercentage = data.map(device => ({
//     ...device,
//     percentage: ((device.value / total) * 100).toFixed(1)
//   }));

//   return (
//     <div className="bg-white p-5 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
//       <h2 className="text-lg font-semibold mb-3">Total</h2>
//       <div className="w-full min-w-0 h-60 overflow-hidden">
//         <ResponsiveContainer width="100%">
//           <PieChart>
//             <Pie data={dataWithPercentage} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="80%" innerRadius="40%" paddingAngle={3} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}>
//               {dataWithPercentage.map((v, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip formatter={(value, name, props) => `${value} (${props.payload.percentage}%)`} />
//             <Legend verticalAlign="bottom" height={36} />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Total;





import icn from '../assets/react.svg';
const Total = () => {
  return (
    <div className="border grid grid-cols-3 justify-between gap-6 h-[100%] py-4">
      <CardData />
      <CardData />
      <CardData />
    </div>
  )
}
export default Total;



const CardData = () => {
  return (
    <div className="border flex flex-col justify-around items-center p-5">
      <div className="border h-18 w-18 rounded-full"><img src={icn} alt="icon" className='h-full w-full' /></div>
      <div className="border font-medium">
        <p>Bounce rate:</p>
        <p className="text-center">36%</p>
      </div>
      <div className="border font-medium">
        <p>Bounce rate:</p>
        <p className="text-center">50%</p></div>
    </div>
  );
};