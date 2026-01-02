import BarChartSingle from "./components/BarChartSingle";
import Date from "./components/Date";
import BarChartDouble from "./components/BarChartDouble";
import Total from "./components/Total";

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-gray-100 grid grid-rows-[0.5fr_4fr_2fr_3.5fr] gap-4 p-4">

      <div className="border flex items-center">
        <Date/>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="border">
          <BarChartSingle/>
        </div>
        <div className="border">
          <BarChartDouble/>
        </div>
        <div className="border">
          <Total/>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        <div className="border">KPI</div>
        <div className="border">KPI</div>
        <div className="border">KPI</div>
        <div className="border">KPI</div>
        <div className="border">
          <div className="border">
            {/* <div className="border">p</div>
            <div className="border">g</div>
            <div className="border">b</div>
            <div className="border">n</div>
            <div className="border">y</div>
          </div>
          <div className="border">
            <div className="border">3</div>
            <div className="border">4</div>
            <div className="border">10</div>
            <div className="border">2</div>
            <div className="border">y</div> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="border">Image</div>
        <div className="border">Slider</div>
        <div className="border">Container</div>
      </div>

    </div>
  );
};

export default App;




