import "./login.css"
import React from "react";
import { useState } from 'react';
import { Grid } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import { Button } from "@material-ui/core"
import PropTypes from 'prop-types';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [condition, setCondition] = useState(false)
    const [error ,setError] =useState("")
    const [emailPass, setEmailPass] = useState({ email: "admin@gmail.com", pass: "123" });
    const Evaluation = () => {
        if (username == emailPass.email && password == emailPass.pass) {
            setCondition(true)
        }
        else{
            setError("Invalid Email or Password!")
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }
    return (
        <Grid item xs={12} container spacing={1}>
            <Grid item lg={4}></Grid>
            <Grid item lg={4}>
                <div id="main">
                    <form onSubmit={handleSubmit}>
                        <p id="mainName">SWAPI</p>
                        <p id="mainHeading">The Star Wars API</p>
                        <p style={{color:"red", }}>{error}</p>
                        <label>
                            <TextField className="textInput" id="outlined-basic" label="User name or email" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
                        </label>
                        <br /><br />
                        <label>
                            <TextField className="textInput" id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <div>
                            <p id="forget">Forget Password?</p>
                            {
                                condition ?
                                    <div>
                                        <Button id="loginButton" variant="contained" size="large" color="primary" type="submit">Log In</Button>
                                    </div>
                                    :
                                    <div>
                                        <Button id="loginButton" variant="contained" size="large" color="primary" onClick={Evaluation}>Log In</Button>
                                    </div>
                            }
                        </div>
                    </form>
                </div>
            </Grid>
            <Grid item lg={4}></Grid>
        </Grid>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
