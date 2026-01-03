// const Emailer = () => {
//     return(
//         <div className=" grid grid-cols-2 gap-5 p-3">
//             <div className="">
//                 <h1 className="font-bold text-xl h-10 border">Emailer</h1>
//                 <div className="border border-red-500 flex-1 grid grid-cols-2">
//                     <div className="border">d</div>
//                     <div className="border">d</div>
//                     <div className="border">d</div>
//                     <div className="border">d</div>
//                 </div>
//             </div>
//             <div className="border">dcd</div>
//         </div>
//     );
// };

// export default Emailer;



const Emailer = () => {
    return (
        <div className="grid grid-cols-2 gap-5 p-3 h-full">

            <div className="flex flex-col h-full">

                <h1 className="font-bold text-xl h-10 border">
                    Emailer
                </h1>

                <div className="border border-red-500 flex-1 grid grid-cols-2 gap-2">
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Total Send:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Click Rate:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Open Rate:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Subscribers:</p>
                        <p className="text-xl">65455</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full">

                <h1 className="font-bold text-xl h-10 border">
                    Ad Spent
                </h1>

                <div className="border border-red-500 flex-1 grid grid-cols-2 gap-2">
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Best Keyword:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Best Ad:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Best Product:</p>
                        <p className="text-xl">65455</p>
                    </div>
                    <div className="border p-3 flex flex-col justify-center">
                        <p className="text-gray-500 font-bold">Best Product:</p>
                        <p className="text-xl">65455</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emailer;
