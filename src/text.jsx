


// const App = () => {

//   const [time,setTime] = useState();

//   useEffect(() => {
//     const ws = new WebSocket("wss://marketing-dashboard.integerstech.com/analyze/ws/current-datetime");

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       setTime(data.current_datetime);
//     };

//    return () => ws.close();
//   }, []);

//   console.log(time);

//   // const getData = () => {
//   //   let result = fetch("https://api/")
//   // }

//   // useEffect(()=>{
//   //   getData();
//   // },[]);

//   return (
//     <div className="border bg-gray-500 w-50 m-auto">
//     </div>
//   );
// };
// export default App;












// import { useRef } from "react";

// const App = () => {
//   const [time, setTime] = useState(null);
//   const timerRef = useRef(null);

// console.log(time);

//   const getNewDate = async () => {
//     try {
//       const result = await fetch(
//         "https://ecommerce-backend-c7wa.onrender.com/time"
//       );
//       const data = await result.json();

//       console.log(data);

//       let serverTime = new Date(data.serverTime);
//       setTime(serverTime);

//       // purana interval clear
//       if (timerRef.current) clearInterval(timerRef.current);

//       // har second time badhao
//       timerRef.current = setInterval(() => {
//         serverTime = new Date(serverTime.getTime() + 1000);
//         setTime(new Date(serverTime));
//       }, 1000);
//     } catch (err) {
//       console.error("Failed to fetch time", err);
//     }
//   };

//   useEffect(() => {
//     getNewDate();

//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, []);

//   return (
//     <>
//       <h1>hello</h1>

//       {time && (
//         <h2>
//           {time.toLocaleString("en-IN", {
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//             day: "2-digit",
//             month: "2-digit",
//             year: "numeric",
//           })}
//         </h2>
//       )}
//     </>
//   );
// };

// export default App;










// import { useRef,useEffect } from "react";

// const WS_URL =
//   "wss://marketing-dashboard.integerstech.com/analyze/ws/current-datetime";

// function App() {
//   const wsRef = useRef(null);
//   const initialized = useRef(false);

//   useEffect(() => {
//     // 🔑 Prevent double init in StrictMode
//     if (initialized.current) return;
//     initialized.current = true;

//     const ws = new WebSocket(WS_URL);
//     wsRef.current = ws;

//     ws.onopen = () => {
//       console.log("✅ WebSocket connected");
//     };

//     ws.onmessage = (e) => {
//       console.log("🕒 Server time:", e.data);
//     };

//     ws.onerror = (e) => {
//       console.error("❌ WebSocket error", e);
//     };

//     return () => {
//       if (wsRef.current?.readyState === WebSocket.OPEN) {
//         wsRef.current.close();
//       }
//     };
//   }, []);

//   return <h2>Check Console</h2>;
// }

// export default App;









import { useEffect, useRef } from "react";

const WS_URL =
  "wss://marketing-dashboard.integerstech.com/analyze/ws/current-datetime";

function App() {
  const wsRef = useRef(null);
  const initialized = useRef(false);
  const retryCount = useRef(0);
  const reconnectTimer = useRef(null);

  const connectWebSocket = () => {
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket connected");
      retryCount.current = 0;
    };

    ws.onmessage = (e) => {
      console.log("🕒 Server time:", e.data);
    };

    ws.onerror = (err) => {
      console.error("❌ WebSocket error", err);
    };

    ws.onclose = () => {
      console.warn("⚠️ WebSocket closed");

      // 🔁 Auto-reconnect (max 5 retries)
      if (retryCount.current < 5) {
        retryCount.current += 1;
        reconnectTimer.current = setTimeout(() => {
          connectWebSocket();
        }, 2000);
      }
    };
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    connectWebSocket();

    return () => {
      clearTimeout(reconnectTimer.current);
      wsRef.current?.close();
    };
  }, []);

  return <h2>Live Server Time (WebSocket)</h2>;
}

export default App;
