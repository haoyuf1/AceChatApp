import React, { useState } from 'react';
import { 
  Button,
  TextField,
  Grid,
  Card,
  CardHeader,
  CardContent,
  AppBar,
  Typography,
  Toolbar
 } from "@mui/material";

export default function Login() {
    const [userName, setUserName] = useState("");

    const [password, setPassword] = useState("");

    return (
        <>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            backgroundColor="#C8D6E4"
            >
                <Grid item sx={{ width: 300, height: 300 }}>
                <Card variant="outlined">
                    <CardHeader title="Log in to your Account"/>
                    <CardContent>
                    <Grid container 
                        display="flex" 
                        alignItems="center"
                        justifyContent="center"
                        rowSpacing={2}>
                        <Grid item>
                        <TextField
                            type="username"
                            placeholder="username"
                            required
                            autoFocus
                        />
                        </Grid>
                        <Grid item>
                        <TextField
                            type="password"
                            placeholder="password"
                            required
                            autoFocus
                        />
                        </Grid>
                        <Grid container 
                            direction="row" 
                            alignItems="center"
                            justifyContent="center"
                            spacing={2}
                            sx={{"mt":"5px"}}
                            >
                            <Grid item>
                                <Button variant="contained">
                                    <Typography>Log in</Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography>Sign up</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </>
    )
};