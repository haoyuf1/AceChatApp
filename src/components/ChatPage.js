import NavBar from './NavBar';
import { 
    Button,
    TextField,
    Grid,
    Card,
    CardHeader,
    CardContent,
    Modal,
    AppBar,
    Typography,
    Toolbar
   } from "@mui/material";

export default function ChatPage() {

    return (
        <div class="ChatPage">
            <NavBar/>
            <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            style={{ minHeight: '100vh' }}
            backgroundColor="#C8D6E4"
            >
                <Grid container item 
                    xs={2} 
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <Card>
                        <CardContent>
                            <Grid item>
                                <Typography>Chat Room 1</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Chat Room 2</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Chat Room 3</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                <Card>
                    <CardContent>
                        <Grid item>
                            <Typography>Chat Room 1</Typography>
                        </Grid>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};