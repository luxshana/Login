import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Home from "../Home";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

function App() {
  const navigate = useNavigate();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedAdmin, setSubmittedAdmin] = useState(false);

  // User Login info
  const database = [
    {
      username: "User",
      password: "2222",
    },
  ];
  const database1 = [
    {
      username: "Admin",
      password: "1111",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    // navigate('/');
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    const userData1 = database1.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else if (userData1) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setSubmittedAdmin(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <Typography className="form">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Typography className="input-container">
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            name="uname"
            variant="outlined"
          />
          {renderErrorMessage("uname")}
        </Typography>
        <Typography className="input-container">
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            name="pass"
            variant="outlined"
          />

          {renderErrorMessage("pass")}
        </Typography>
        <a href="#">fogot password?</a>
        <Typography className="button-container" sx={{ p: 3 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ borderRadius: 4 }}
          >
            Login
          </Button>
        </Typography>
      </form>
    </Typography>
  );
  // const project = ()=>{
  //   if(database){
  //    if(){

  //    } 
  //   }
  // }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title"></div>
        {isSubmitted ? (
          <div>
            {" "}
            <Home />
          </div>
        ) : (
          renderForm
        )}
        {  submittedAdmin ? (
          <div>
            {" "}
            <Home />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
