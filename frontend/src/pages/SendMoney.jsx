import {useNavigate, useSearchParams} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from 'react';
import {transferMoney} from "../apicalls.js";
// import {toast} from "react-toastify";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    async function onClickSendMoney() {
        if (!amount || amount<0) {
            toast.error(`Please enter an amount`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return
        }




        const response = await transferMoney(localStorage.getItem("token"), id, amount)
        if (response === "Insufficient Funds") { /* empty */
            toast.error(`Insufficient Funds`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            return
        }
        if (response === "Transfer successful") {
            toast.success(`Funds transferred Successfully `, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        }
    }


useEffect(() => {
    if (!localStorage.getItem("token")) {
        navigate("/signin")
    }
}, []);

return <div className="flex justify-center h-screen bg-gray-100">
    <ToastContainer/>
    <div className="h-full flex flex-col justify-center">
        <div
            className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg shadow-2xl"
        >
            <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6 pt-0">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 font-semibold rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                </div>
                <div className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            form="amount"
                        >
                            Amount (in $)
                        </label>
                        <input
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            type="number"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                            id="amount"
                            placeholder="Enter amount"
                        />
                    </div>
                    <button onClick={onClickSendMoney
                        // try {
                        //      axios.post("http://localhost:3000/api/v1/account/transfer", {
                        //         to: id,
                        //         amount
                        //     }, {
                        //         headers: {
                        //             Authorization: "Bearer " + localStorage.getItem("token")
                        //         }
                        //     }.then(
                        //             navigate("/dashboard"))
                        //     )
                        // } catch (err) {
                        //     console.log(err)
                        // }
                    }
                            className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
}