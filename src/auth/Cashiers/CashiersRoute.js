import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import CashiersHome from "./CashiersHome";


const AdminRoute =()=>{

    return (
        <Router>
            <Switch>
                <Route path='/auth' component={CashiersHome}/>
            </Switch>
        </Router>
    )
}

export default AdminRoute