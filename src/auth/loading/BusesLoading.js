import { Grid } from "@material-ui/core"

const BusesLoading =()=>{
    return <Grid container spacing={2}>
            <Grid item md={3}>
                Loading...
            </Grid>

            <Grid item md={9}>
                Loading...
            </Grid>
        </Grid>
}

export default BusesLoading