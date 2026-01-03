import image from '../assets/about.png';

const TodaysCreative = () => {
  return (
    <div className="h-full flex flex-col border">
      
      {/* Header – fixed height */}
      <h2 className="font-bold text-xl h-10 ">
        Todays Creative
      </h2>

      {/* Images – remaining space */}
      <div className="grid grid-cols-2 gap-4 h-53">
        
        <div className="overflow-hidden rounded-lg border">
          <img
            src={image}
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-lg border">
          <img
            src={image}
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default TodaysCreative;
