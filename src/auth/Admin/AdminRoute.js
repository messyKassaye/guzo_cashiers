import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const AdminRoute =()=>{

    return (
        <Router>
            <Switch>
                <Route path='/auth' component={AdminDashboard}/>
            </Switch>
        </Router>
    )
}

export default AdminRoute