import React, {Suspense} from "react";

import {
  BrowserRouter,
  Route,
  Routes,
    Navigate
} from "react-router-dom";
// import { Signup } from "./pages/Signup";
// import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import Loading from "./pages/Loading.jsx";
import Notfound from "./pages/Notfound.jsx";
import Home from "./pages/Home.jsx";

const Signin  = React.lazy(()=>import("./pages/Signin"))
const Signup  = React.lazy(()=>import("./pages/Signup"))

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route exact  path="/signup" element={<Suspense fallback={<Loading/>}>  <Signup /></Suspense>} />
            <Route exact path="/signin" element={<Suspense fallback={<Loading/>}> <Signin /></Suspense>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/send" element={<SendMoney />} />
            <Route exact path="/" element={<Home/>} />
            <Route path={"*"} element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
