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
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            {/*<div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">*/}
            {/*    <div className="flex flex-col justify-center h-full text-xl">*/}
            {/*        <AccountCircleIcon/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div onClick={onClickLogout} className={"flex gap-2 justify-center items-center mr-4 cursor-pointer"}>
                Logout
                <LogoutIcon/>
            </div>
        </div>
    </div>
}