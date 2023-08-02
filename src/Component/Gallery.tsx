import { useState } from "react"


const RightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
    <g clipPath="url(#clip0_180_20)">
        <path d="M15.8604 55.5117L51.1859 32.0814L15.8604 8.65118V55.5117Z" stroke="#D50808" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_180_20">
            <rect width="62" height="62" fill="white" />
        </clipPath>
    </defs></svg>

const LeftIcon = <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none" >
    <g clipPath="url(#clip0_180_23)">
        <path d="M46.1396 55.5117L10.8141 32.0814L46.1396 8.65118V55.5117Z" stroke="#D50808" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_180_23">
            <rect width="62" height="62" fill="white" transform="matrix(-1 0 0 1 62 0)" />
        </clipPath>
    </defs></svg>


const Gallery: React.FC = () => {

    const numberOfImgs = 5
    const [firsImgNum, setFirtsImgNum] = useState(1)
    const [secondImgNum, setSecondImgNum] = useState(2)
    const [thirdImgNum, setThirdImgNum] = useState(3)

    const ChangeImgs = (dir: string) => {
        if (dir === "right") {
            setFirtsImgNum((prevNum) => (prevNum + 1 > numberOfImgs ? 1 : prevNum + 1));
            setSecondImgNum((prevNum) => (prevNum + 1 > numberOfImgs ? 1 : prevNum + 1));
            setThirdImgNum((prevNum) => (prevNum + 1 > numberOfImgs ? 1 : prevNum + 1));
        } else {
            setFirtsImgNum((prevNum) => (prevNum - 1 === 0 ? numberOfImgs : prevNum - 1));
            setSecondImgNum((prevNum) => (prevNum - 1 === 0 ? numberOfImgs : prevNum - 1));
            setThirdImgNum((prevNum) => (prevNum - 1 === 0 ? numberOfImgs : prevNum - 1));
        }
    }

    return (
        <div className="bg-[#000] bg-opacity-40 flex flex-col items-center -mt-4">

            <div className="flex flex-col w-[90%] ">

                <h1 className="text-3xl font-bold text-[#F0F4FA] w-fit border-b-4 pb-2 mb-8">الاستديو</h1>

                <div className="flex justify-around items-center">
                    <div className=" cursor-pointer" onClick={() => ChangeImgs("right")}>{RightIcon}</div>

                    <div className="flex flex-row-reverse justify-center w-[90%] h-96 2xl:h-[34rem] gap-3 select-none">


                        <img src={`/GalleryImgs/GalleryImg${firsImgNum}.webp`} alt={`GalleryImg ${firsImgNum}`} className="w-[33%] h-full object-cover" />
                        <img src={`/GalleryImgs/GalleryImg${secondImgNum}.webp`} alt={`GalleryImg ${secondImgNum}`} className="w-[33%] h-full object-cover" />
                        <img src={`/GalleryImgs/GalleryImg${thirdImgNum}.webp`} alt={`GalleryImg ${thirdImgNum}`} className="w-[33%] h-full  object-cover" />


                    </div>

                    <div className=" cursor-pointer" onClick={() => ChangeImgs("left")}>{LeftIcon}</div>
                </div>

            </div>
        </div>
    )
}

export default Gallery