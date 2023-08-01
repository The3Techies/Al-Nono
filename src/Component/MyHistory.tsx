import { useState } from "react";


const btns = ["أهلي صنعاء", "النادي المصري", "شعب إب", "المريخ", "البسيتين", "تشرين السوري", "التلال"]




const MyHistory: React.FC = () => {

    const [indexactive, setIndexactive] = useState(0)


    const btnsHtml = btns.map((btn, index) => (
        <button
            key={index}
            className={
                "w-60 p-2 rounded-lg bg-black bg-opacity-40 text-xl" +
                (index === indexactive
                    ? " shadow-[0_4px_4px_0px_rgba(255,2,2,0.3)] text-[#FF0707] "
                    : " shadow-[0_4px_4px_0px_rgba(255,255,255,0.3)] text-[#fff] ")
            }
            onClick={() => setIndexactive(index)}
        >
            {btn}
        </button>
    ));

    return (
        <div className=" p-4 md:px-12 2xl:px-48 bg-cover bg-lightgray bg-[url('/MyHistoryImgs/BgMyHistory.png')] ">

            <h1 className="text-2xl font-bold my-4 text-white">
                تاريخي  <span className="text-red-500">الرياضي</span>
            </h1>

            <div className="border-b-2 border-white mb-4 w-36"></div>

            <div className="flex">
                <div className="flex flex-col gap-4 ">
                    {btnsHtml}
                </div>
            </div>



        </div>
    );
};

export default MyHistory;
