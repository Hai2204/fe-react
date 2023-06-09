import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenlicated, login } from "./store/loginSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [loadDing, setLoadDing] = useState(false);
    const isAuth = useSelector(isAuthenlicated);
    console.log(isAuth);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        setLoadDing(true);
        const data = new FormData(event.currentTarget);
        event.preventDefault();
        const req = {
            userName: data.get("userName"),
            password: data.get("password"),
        }
        dispatch(login(req)).then(e => {
            enqueueSnackbar(e.payload);
        })
            .then(() => {
                setTimeout(() => {
                    navigate("/home.html")
                }, 1000);
            })
            .catch(err => {
                enqueueSnackbar(err);
            })
        setLoadDing(false);
    };

    return (
        // isAuth ? navigate("/home.html") :
            <Container component="main" maxWidth="lg">
                <Box
                    sx={{
                        marginTop: 8,
                    }}
                >
                    <Grid container>
                        <CssBaseline />
                        <Grid
                            item
                            xs={false}
                            sm={4}
                            md={7}
                            sx={{
                                backgroundImage: "url(https://source.unsplash.com/random)",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) =>
                                    t.palette.mode === "light"
                                        ? t.palette.grey[50]
                                        : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={5}
                            component={Paper}
                            elevation={6}
                            square
                        >
                            <Box
                                sx={{
                                    my: 8,
                                    mx: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography component="h1" variant="h5" >
                                    Đăng Nhập
                                </Typography>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={(handleSubmit)}
                                    sx={{ mt: 1 }}
                                >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="Tên đăng nhập"
                                        name="userName"
                                        autoComplete="userName"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Mật khẩu"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        disabled={loadDing}
                                    >
                                        {!loadDing ? "Sign In" : "Please wait..."}
                                    </Button>
                                    {/* <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid> */}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    );
}