const KPI = ({ txt1, txt2, val1, val2 }) => {

  return (
    <div className="h-full">
      <div className="bg-white h-full rounded-2xl p-5 shadow-sm border border-gray-200 ">

        <p className="text-xl font-bold text-gray-800">
          {txt1}: {val1}
        </p>

        {txt2 && val2 != null && (
          <p className="mt-1 text-gray-600 font-bold">
            {txt2}: {val2}
          </p>
        )}

      </div>
    </div>
  );
};

export default KPI;
