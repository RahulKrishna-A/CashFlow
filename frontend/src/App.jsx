import React, {Suspense} from "react";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
// import { Signup } from "./pages/Signup";
// import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import Loading from "./pages/Loading.jsx";

const Signin  = React.lazy(()=>import("./pages/Signin"))
const Signup  = React.lazy(()=>import("./pages/Signup"))

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Suspense fallback={<Loading/>}>  <Signup /></Suspense>} />
            <Route path="/signin" element={<Suspense fallback={<Loading/>}> <Signin /></Suspense>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
