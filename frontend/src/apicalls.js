import axios from "axios";

const BASE_URL = 'http://localhost:3000'


export const signin = async (username, password) => {
    const url = `${BASE_URL}/api/v1/user/signin`
    try {
        const res = await axios.post(url, {
            username,
            password
        })
        // console.log(res.data)
        return res.data
    } catch (err) {
        // console.log(err.response.data.message)
        return err.response.data.message
    }

}


export const signup = async (username, firstName, lastName, password) => {
    const url = `${BASE_URL}/api/v1/user/signup`
    try{
    const res = await axios.post(url, {
        username,
        firstName,
        lastName,
        password
    });
    // console.log(res)
        return res.data
    }
    catch (err){
        // console.log(err.response.data.message)
        return (err.response.data.message)
    }


}


export const getBalance = async(token)=>{

    const url = `${BASE_URL}/api/v1/account/balance`
    const res = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res.data.balance


}


export const transferMoney = async (token,to,amount)=>{
    const url = `${BASE_URL}/api/v1/account/transfer`
    try{
        const res = await axios.post(url,{to:to,amount:amount},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    }catch (err){
console.log(err)
        return err.response.data.message
    }

}