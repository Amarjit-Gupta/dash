// // import { useEffect, useState } from "react";
// // import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// // const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// // const Total = () => {



// // const data = [
// //     {
// //       "name": "promo1",
// //       "value": 500
// //     },
// //     {
// //       "name": "promo2",
// //       "value": 700
// //     },
// //     {
// //       "name": "promo3",
// //       "value": 200
// //     }
// //   ]

// //   const total = data.reduce((sum, device) => sum + device.value, 0);

// //   const dataWithPercentage = data.map(device => ({
// //     ...device,
// //     percentage: ((device.value / total) * 100).toFixed(1)
// //   }));

// //   return (
// //     <div className="bg-white p-5 rounded-xl border w-full min-w-0 flex flex-col shadow-sm hover:shadow-lg border-gray-200 transition-shadow duration-500">
// //       <h2 className="text-lg font-semibold mb-3">Total</h2>
// //       <div className="w-full min-w-0 h-60 overflow-hidden">
// //         <ResponsiveContainer width="100%">
// //           <PieChart>
// //             <Pie data={dataWithPercentage} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius="80%" innerRadius="40%" paddingAngle={3} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}>
// //               {dataWithPercentage.map((v, index) => (
// //                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //               ))}
// //             </Pie>
// //             <Tooltip formatter={(value, name, props) => `${value} (${props.payload.percentage}%)`} />
// //             <Legend verticalAlign="bottom" height={36} />
// //           </PieChart>
// //         </ResponsiveContainer>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Total;





// // import icn from '../assets/react.svg';
// // const Total = () => {
// //   return (
// //     <div className="border grid grid-cols-3 justify-between gap-6 h-[100%] py-3">
// //       <CardData />
// //       <CardData />
// //       <CardData />
// //     </div>
// //   )
// // }
// // export default Total;



// // const CardData = () => {
// //   return (
// //     <div className="border flex flex-col justify-between items-center">
// //       <div className="border h-18 w-18 rounded-full"><img src={icn} alt="icon" className='h-full w-full' /></div>
// //       <div className="border font-medium">
// //         <p className='text-xl'>Bounce rate:</p>
// //         <p className="text-center text-2xl">36%</p>
// //       </div>
// //       <div className="border font-medium">
// //         <p className='text-xl'>Bounce rate:</p>
// //         <p className="text-center text-2xl">50%</p></div>
// //     </div>
// //   );
// // };



import icn from '../assets/react.svg';

const Total = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full p-3">
      <CardData title1="Bounce rate" title2="Last month" value1={'45%'} value2={'50%'} />
      <CardData  title1="Engagement time" title2="Last month" value1={'20m 15s'} value2={'20m 15s'} />
      <CardData  title1="Clicks" title2="Last month" value1={8} value2={15} />
    </div>
  );
};

export default Total;


const CardData = ({ title1,title2, value1, value2 }) => {
  // console.log(typeof(value1));
  // console.log(typeof(value2));
  return (
    <div className="bg-white shadow-xs rounded-lg p-4 flex flex-col justify-between items-center gap-4">
      
      {/* Icon */}
      <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center border">
        <img src={icn} alt="icon" className="h-10 w-10 object-contain" />
      </div>

      {/* First metric */}
      <div className="text-center border">
        <p className="text-gray-500 font-medium">{title1}:</p>
        <p className="text-2xl font-bold">{value1}</p>
      </div>

      {/* Second metric */}
      <div className="text-center border">
        <p className="text-gray-500 font-medium">{title2}:</p>
        <p className="text-2xl font-bold">{value2}</p>
      </div>
    </div>
  );
};











// import icn from "../assets/react.svg";

// const Total = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full p-3">
//       <CardData title="Bounce Rate" current={36} previous={50} />
//       <CardData title="Click Rate" current={12} previous={24} />
//       <CardData title="Conversion" current={8} previous={15} />
//     </div>
//   );
// };

// export default Total;

// const CardData = ({ title, current, previous }) => {
//   const isIncrease = current > previous;

//   return (
//     <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center gap-4">
      
//       {/* Icon */}
//       <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
//         <img src={icn} alt="icon" className="h-10 w-10 object-contain" />
//       </div>

//       {/* Current value */}
//       <div className="text-center">
//         <p className="text-gray-500 font-medium">{title}</p>
//         <p
//           className={`text-2xl font-bold ${
//             isIncrease ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {current}%
//         </p>
//       </div>

//       {/* Previous value */}
//       <div className="text-center">
//         <p className="text-gray-500 font-medium">{title}</p>
//         <p className="text-2xl font-bold text-gray-700">{previous}%</p>
//       </div>
//     </div>
//   );
// };
