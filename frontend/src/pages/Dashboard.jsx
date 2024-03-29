import {Appbar} from "../components/Appbar"
import {Balance} from "../components/Balance"
import {Users} from "../components/Users"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
// import { useHistory } from 'react-router-dom';
import axios from "axios";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getBalance} from "../apicalls.js";

export const Dashboard = () => {


    const [token, setToken] = useState(0)
    // console.log(token)
    const [balance, setBalance] = useState(0)

    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signin")
        } else {
            setToken(localStorage.getItem("token"))
        }
    }, []);


    useEffect(() => {

        if (balance) {
            toast.info(`Your balance is $ ${balance}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }


    }, [balance]);


    useEffect(() => {
            async function start() {
                const response = await getBalance(token)
                await setBalance(response)
            }

            if (!!token) {
                start()
            }
        }


        , [token])


    return <div>
        <ToastContainer/>
        <Appbar/>
        <div className="m-8">
            <Balance value={balance}/>
            <Users/>
        </div>
    </div>
}