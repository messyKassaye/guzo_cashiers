import CommonDashboard from "../../commons/CommonDashboard"
import adminDrawerMenu from "./data/adminDrawerMenu"
import AdminNestedRoute from "./routes/AdminNestedRoute"

const AdminDashboard = ()=>{

    return(
        <CommonDashboard drawerMenu={adminDrawerMenu} routes={<AdminNestedRoute/>}/>
    )
}

export default AdminDashboard