import React, {Suspense} from "react";
import {getRole} from "../TokenService";
import AdminRoute from "./Admin/AdminRoute";
import {BrowserRouter as Router} from "react-router-dom";
import Loading from "../helpers/Loading";


 const Authenticated = ()=>{
     let Component=null
    const roleId = JSON.parse(getRole()).id

     if(roleId===2){
        Component = React.lazy(()=> import("./Admin/AdminRoute"))
     }else if(roleId===3){
        Component = React.lazy(()=> import("./Cashiers/CashiersRoute"))
     }
        return (
            <Suspense fallback={<Loading/>}>
                <Router>
                <Component/>
             </Router>
            </Suspense>
        )
}
export default Authenticated
