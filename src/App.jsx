import BarChartSingle from "./components/BarChartSingle";
import Date from "./components/Date";
import BarChartDouble from "./components/BarChartDouble";
import Total from "./components/Total";
import KPI from "./components/KPI";
import TodaysCreative from "./components/TodaysCreative";



const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100 grid grid-rows-[0.5fr_4fr_2fr_3.5fr] gap-4 p-4">

      <div className="border flex items-center">
        <Date />
      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="border">
          <BarChartDouble />
        </div>
        <div className="border">
          <BarChartSingle />
        </div>
        <div className="border">
          <Total />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6 items-stretch">

        <div className=" border h-full">
          <KPI txt1="Total Leads" txt2="Last month period" val1={20} val2={20} />
        </div>

        <div className="border h-full">
          <KPI txt1="Best Company" val1="xyz" />
        </div>

        <div className="border h-full">
          <KPI txt1="Best Product" val1="xyz" />
        </div>

        <div className="border h-full">
          <KPI txt1="Revenue" val1={20} />
        </div>

        <div className="h-full border p-5 flex justify-between">
          <div className="border flex flex-col justify-between ">
            <div className="border p-1 rounded-full h-9 w-9">p</div>
            <div className="border text-xl font-medium">999</div>
          </div>
          <div className="border flex flex-col justify-between ">
            <div className="border p-1 rounded-full h-9 w-9">g</div>
            <div className="border text-xl font-medium">999</div>
          </div>
          <div className="border flex flex-col justify-between ">
            <div className="border p-1 rounded-full h-9 w-9">b</div>
            <div className="border text-xl font-medium">9999</div>
          </div>
          <div className="border flex flex-col justify-between ">
            <div className="border p-1 rounded-full h-9 w-9">n</div>
            <div className="border text-xl font-medium">999</div>
          </div>
          <div className="border flex flex-col justify-between ">
            <div className="border p-1 rounded-full h-9 w-9">y</div>
            <div className="border text-xl font-medium">999</div>
          </div>
        </div>

      </div>


      <div className="grid grid-cols-3 gap-6">
        <div className="border p-3"><TodaysCreative /></div>



        <div className="border p-3 flex flex-col">
       
          <h2 className="text-xl font-bold h-10 border">
            Heading
          </h2>
     
          <div className="grid grid-cols-2 gap-5 h-44">
            <div className="border border-red-500">dcddcd</div>
            <div className="border">xs</div>
          </div>
        </div>



        <div className="border">Container</div>
      </div>





    </div>
  );
};

export default App;








// const App = () => {
//   return(
//     <div className="border bg-gray-500 w-50 m-auto">
//       <CarouselComponent/>
//     </div>
//   );
// };
// export default App;