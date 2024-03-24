// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";

export const Appbar = () => {

    const navigate = useNavigate()

    function onClickLogout(){
        localStorage.removeItem("token")
        navigate("/")

    }


    return <div className="shadow h-14 flex justify-between">
        <div className="flex items-center justify-center h-full ml-4">
            <svg className={"h-8 w-8 mr-2"} viewBox="0 0 559 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_402_4)">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M411.6 120.4C491.4 127.4 554.4 191.8 558.6 271.6C554.4 140 445.2 35 312.2 39.2C233.8 42 161 81.2 119 147C126 67.2 190.4 4.2 270.2 0C137.2 5.6 35 119 40.6 252C43.4 327.6 82.6 397.6 145.6 439.6C65.8 432.6 4.2 368.2 0 288.4C2.8 420 113.4 525 245 522.2C323.4 520.8 394.8 480.2 438.2 415.8C431.2 494.2 366.8 555.8 288.4 560C420 555.8 523.6 445.2 519.4 312.2C516.6 235.2 477.4 162.4 411.6 120.4ZM278.6 380.8C252 380.8 226.8 371 208.6 351.4C169.4 312.2 170.8 249.2 208.6 211.4C246.4 173.6 310.8 173.6 348.6 211.4C386.4 249.2 386.4 313.6 348.6 351.4C330.4 371 305.2 380.8 278.6 380.8Z"
                          fill="#0b8507"/>
                </g>
                <defs>
                    <clipPath id="clip0_402_4">
                        <rect width="558.6" height="560" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

            <div className={"italic font-bold sm:text-3xl text-xl"}>
                CashFlow<a className={"text-green-600"}>.</a>
            </div>
        </div>
        <div className="flex">
            <div className=" font-bold text-xl  flex flex-col justify-center h-full mr-4  ">
                Hello!
            </div>
            {/*<div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">*/}
            {/*    <div className="flex flex-col justify-center h-full text-xl">*/}
            {/*        <AccountCircleIcon/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div onClick={onClickLogout} className={"font-semibold text-xl flex gap-2 justify-center items-center mr-4 cursor-pointer"}>
                Logout
                <LogoutIcon/>
            </div>
        </div>
    </div>
}