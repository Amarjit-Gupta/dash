import { useEffect, useState } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-end w-full gap-4 font-bold text-xl">
      <h2>
        Date: {dateTime.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </h2>

      <h2>
        Time: {dateTime.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </h2>
    </div>
  );
};

export default DateTime;
