
const WhatsappIcon = <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" >
    <g clipPath="url(#clip0_180_38)">
        <path d="M9 62.1313L13.95 50.7313C10.163 45.3554 8.468 38.7823 9.18313 32.2456C9.89827 25.7088 12.9744 19.6577 17.8341 15.2278C22.6939 10.798 29.0033 8.2939 35.5781 8.18555C42.153 8.07721 48.5415 10.372 53.5446 14.6394C58.5476 18.9067 61.8214 24.8532 62.7515 31.3629C63.6817 37.8725 62.2042 44.4979 58.5963 49.9956C54.9885 55.4932 49.4983 59.4853 43.1562 61.2226C36.814 62.9598 30.0559 62.3229 24.15 59.4313L9 62.1313Z" stroke="#F0F4FA"  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 30C27 30.3978 27.158 30.7794 27.4393 31.0607C27.7206 31.342 28.1022 31.5 28.5 31.5C28.8978 31.5 29.2794 31.342 29.5607 31.0607C29.842 30.7794 30 30.3978 30 30V27C30 26.6022 29.842 26.2206 29.5607 25.9393C29.2794 25.658 28.8978 25.5 28.5 25.5C28.1022 25.5 27.7206 25.658 27.4393 25.9393C27.158 26.2206 27 26.6022 27 27V30ZM27 30C27 33.9783 28.5804 37.7936 31.3934 40.6066C34.2064 43.4197 38.0218 45 42 45M42 45H45C45.3978 45 45.7794 44.842 46.0607 44.5607C46.342 44.2794 46.5 43.8978 46.5 43.5C46.5 43.1022 46.342 42.7207 46.0607 42.4393C45.7794 42.158 45.3978 42 45 42H42C41.6022 42 41.2206 42.158 40.9393 42.4393C40.658 42.7207 40.5 43.1022 40.5 43.5C40.5 43.8978 40.658 44.2794 40.9393 44.5607C41.2206 44.842 41.6022 45 42 45Z" stroke="#F0F4FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_180_38">
            <rect width="72" height="72" fill="white"/>
        </clipPath>
    </defs>
</svg>

const InstagramIcon = <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
    <g clipPath="url(#clip0_180_45)">
        <path d="M12 24C12 20.8174 13.2643 17.7652 15.5147 15.5147C17.7652 13.2643 20.8174 12 24 12H48C51.1826 12 54.2349 13.2643 56.4853 15.5147C58.7357 17.7652 60 20.8174 60 24V48C60 51.1826 58.7357 54.2349 56.4853 56.4853C54.2349 58.7357 51.1826 60 48 60H24C20.8174 60 17.7652 58.7357 15.5147 56.4853C13.2643 54.2349 12 51.1826 12 48V24Z" stroke="#F0F4FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 36C27 38.3869 27.9482 40.6761 29.636 42.364C31.3239 44.0518 33.6131 45 36 45C38.3869 45 40.6761 44.0518 42.364 42.364C44.0518 40.6761 45 38.3869 45 36C45 33.6131 44.0518 31.3239 42.364 29.636C40.6761 27.9482 38.3869 27 36 27C33.6131 27 31.3239 27.9482 29.636 29.636C27.9482 31.3239 27 33.6131 27 36Z" stroke="#F0F4FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M49.5 22.5V22.524" stroke="#F0F4FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_180_45">
            <rect width="72" height="72" fill="white" />
        </clipPath>
    </defs>
</svg>

const TwitterIcon = <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
    <g clipPath="url(#clip0_180_42)">
        <path d="M66 12.03C63 13.5 60.06 14.097 57 15C53.637 11.205 48.651 10.995 43.86 12.789C39.069 14.583 35.931 18.969 36 24V27C26.265 27.249 17.595 22.815 12 15C12 15 -0.546003 37.2991 24 48.0001C18.384 51.7411 12.783 54.2641 6 54.0001C15.924 59.4091 26.739 61.2691 36.102 58.5511C46.842 55.4311 55.668 47.3821 59.055 35.3251C60.0654 31.6581 60.5671 27.8696 60.546 24.066C60.546 23.319 65.076 15.75 66 12.027V12.03Z" stroke="#F0F4FA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
        <clipPath id="clip0_180_42">
            <rect width="72" height="72" fill="white" />
        </clipPath>
    </defs>
</svg>

const Contact: React.FC = () => {
    return (
        <div id="Contact" className="bg-[url(/ContactImgs/ContactBg.webp)] bg-opacity-40  flex flex-col items-center">

            <div className="flex flex-col w-[90%] items-center mt-4">
                <h1 className=" text-[#D50808] font-bold text-4xl font-cairo">تابعني</h1>

                <div className="flex mt-8 gap-6">
                    <div className="cursor-pointer">{WhatsappIcon}</div>
                    <div className="cursor-pointer">{InstagramIcon}</div>
                    <div className="cursor-pointer">{TwitterIcon}</div>
                </div>

                <div className="h-[2px] w-full bg-[#F0F4FA] bg-opacity-60 mt-6"></div>
                <p className="text-[#F0F4FA] text-opacity-80 font-bold mt-4"> جميع الحقوق محفوظة <span className="">ProTechies 2023</span></p>
            </div>
        </div>
    )
}

export default Contact