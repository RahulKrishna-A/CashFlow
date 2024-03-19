import {
    BrowserRouter,
    Router,
Route}
import React from "react";



function App() {

  return (
    <div>
       <BrowserRouter>
           <Router>
               <Route path={"/"} element = {}/>
               <Route path={"/signup"} element={}/>
               <Route path={"/signin"} element={}/>
               <Route path={"/dashboard"} element={}/>
               <Route path={"/send"} element={}/>



           </Router>

       </BrowserRouter>
    </div>
  )
}

export default App
