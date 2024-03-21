import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const Dashboard = () => {

    const [token,setToken] = useState(0)
    const [balance,setBalance] = useState(0)

    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/signin")
        }
        else{
            setToken(localStorage.getItem("token"))
        }
    }, []);


    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(response => {
                setBalance(response.data.balance)
                // console.log(response)
            })
    }

    ,[token])


    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}