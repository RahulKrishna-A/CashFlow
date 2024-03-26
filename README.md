
# CashFlow
 
   CashFlow is a web app facilitating virtual money transfers online. Users can send representational money securely using authentication. It offers functionalities like Money transfer , Balance check ,logging in, logging out, checking balances, and updating details, streamlining the online transaction process with ease and security.
## Backend Endpoints

- `${BASE_URL}/api/v1/user/signin` : Signin endpoint for existing users.

- `${BASE_URL}/api/v1/user/signup` : New user signup who is also provided a random balance.

- `${BASE_URL}/api/v1/account/balance` : Checking the balance of the user.

- `${BASE_URL}/api/v1/account/transfer` : Tasks can be filteres based on their completion status.

- `${BASE_URL}/api/v1/account/bulk` : Filtering users on the basis of their first/last names.
## Key Features

- Uses MongoDB session/Transactions to ensure Isolation and Atomicity in the transaction.

- Uses JWT'S and Local storage to store and validate user sessions and authentications.

- Approach of using "fixed-point representation" instead of decimals to avoid decimal errors in DB'S and languages.


## Built with/Technologies used

- ReatJS
- Tailwindcss
- NodeJS
- ExpressJS
- MongoDB
- ZOD
- Hosted on Vercel
- Vite



## Live
## Working Screenshot

![Screenshot_26-3-2024_204055_localhost](https://github.com/RahulKrishna-A/CashFlow/assets/109454528/c8de904a-0152-4e9e-9966-4113b52d2f6e)

![Screenshot_26-3-2024_204118_localhost](https://github.com/RahulKrishna-A/CashFlow/assets/109454528/ccd9cb3c-6b3c-403c-bf84-00e759ba22eb)


![Screenshot_26-3-2024_204159_localhost](https://github.com/RahulKrishna-A/CashFlow/assets/109454528/a6e8ba26-49f0-4ba5-9d23-39118c5a86d2)

![Screenshot_26-3-2024_204227_localhost](https://github.com/RahulKrishna-A/CashFlow/assets/109454528/b319cc4a-1702-4e11-a4da-93e8d793c702)



## Getting started

In order to setup and work on this project on your own, you will need to:

1. Clone this project:
`git@github.com:RahulKrishna-A/CashFlow.git`

2. For accessing frontend components: `cd frontend`

3. A live demo of the project can be started by using:
`npm run dev`

4. For accessing backend components: `cd backend`
