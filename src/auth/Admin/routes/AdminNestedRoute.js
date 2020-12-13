import AdminHome from "../AdminHome"
import {Route } from 'react-router-dom'
import {Switch} from 'react-router-dom'
import BusesComponent from "../components/buses/BusesComponent"
import Banks from "../components/banks/Banks"
import Cashiers from "../components/cashiers/Cashiers"
import Drivers from "../components/drivers/Drivers"
const AdminNestedRoute =()=>{
    return(
        <Switch>
             <Route path={'/auth'} component={AdminHome} exact/>
             <Route path={'/auth/admin/buses'} component={BusesComponent}/>
             <Route path={'/auth/admin/banks'} component={Banks}/>
             <Route path={'/auth/admin/cashiers'} component={Cashiers}/>
             <Route path={'/auth/admin/drivers'} component={Drivers}/>
        </Switch>
    )
}

export default AdminNestedRoute