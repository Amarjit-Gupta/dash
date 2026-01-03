
import { useEffect, useRef, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(null);
  const timerRef = useRef(null);

console.log(time);

  const getNewDate = async () => {
    try {
      const result = await fetch(
        "https://ecommerce-backend-c7wa.onrender.com/time"
      );
      const data = await result.json();

      console.log(data);

      let serverTime = new Date(data.serverTime);
      setTime(serverTime);

      // purana interval clear
      if (timerRef.current) clearInterval(timerRef.current);

      // har second time badhao
      timerRef.current = setInterval(() => {
        serverTime = new Date(serverTime.getTime() + 1000);
        setTime(new Date(serverTime));
      }, 1000);
    } catch (err) {
      console.error("Failed to fetch time", err);
    }
  };

  useEffect(() => {
    getNewDate();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>

      {time && (
        <h2>
          {time.toLocaleString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </h2>
      )}
    </>
  );
};

export default CurrentTime;

