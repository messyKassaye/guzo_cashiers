const { Card, CardHeader, CardContent, IconButton, Divider } = require("@material-ui/core")
const { Add, Person } = require("@material-ui/icons")

const Drivers =()=>{
    return(
        <Card>
            <CardHeader
             title={'Drivers'}
             avatar={
                 <Person/>
             }
             action={
                 <IconButton>
                     <Add/>
                 </IconButton>
             }
            />
            <Divider/>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default Drivers