import { 
    Grid,
    AppBar,
    Typography,
    Toolbar
   } from "@mui/material";
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <>
            <AppBar position="fixed" alignitems="center" color="primary">
                <Toolbar>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Link to={"/"} style={{ textDecoration: "none" }}>
                            <Typography variant="h4" color="white">AceChat App</Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Link to={"/chatpage"} style={{ textDecoration: "none" }}>
                    <Typography variant="h6">Guest</Typography>
                </Link>
                </Toolbar>
            </AppBar>
        </>
    )
};