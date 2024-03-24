import {BottomWarning} from "../components/BottomWarning"
import {Button} from "../components/Button"
import {Heading} from "../components/Heading"
import {InputBox} from "../components/InputBox"
import {SubHeading} from "../components/SubHeading"
import {useState} from "react";
import {signin} from "../apicalls.js";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Signin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function onClickSignin() {
        const value = await signin(username, password)
        // console.log(value)
        if (value === "No user exists") {
            toast.error("No User exists/Incorrect Input", {
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
        if (value === "Error while logging in") {

            toast.error("Please enter valid credentials", {
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
        if (value.token) {

            toast.success("Signed in Successfully", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            localStorage.setItem("token", value.token)
            navigate("/dashboard")
        }

    }


    return <div className="bg-slate-100  h-screen flex justify-center">
        <ToastContainer/>
        <div className="flex flex-col justify-center ">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-2xl">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} placeholder="Rahul@gmail.com" label={"Email"}/>
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder="q23!@1023" label={"Password"}/>
                <div className="pt-4">
                    <Button label={"Sign in"} onClick={onClickSignin}/>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}