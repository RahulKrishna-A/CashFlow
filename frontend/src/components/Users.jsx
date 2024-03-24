import {useEffect, useState} from "react"
import {Button} from "./Button"
import axios from "axios";
import {useNavigate} from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                setUsers(response.data)
                // console.log(response)
            })
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..."
                   className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div className={"flex flex-col gap-2"}>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-blue-600 text-white font-semibold flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful font-semibold">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full font-semibold ">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"}/>
        </div>
    </div>
}