import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
function Register() {
  const [login, showlogin] = useState();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const router = useRouter();
  const signup = () => {
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => console.log(data));
  };

  const loggin = () => {
    alert("login");
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("currentUser", data.msg);
      });
  };
  return (
    <div className="register">
      {!login ? (
        <>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setpass(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={signup}>
            Sign Up
          </Button>
          <br />
          <h4>
            {" "}
            Already a User? {"   "}
            <Button
              variant="contained"
              onClick={(e) => {
                showlogin(!login);
              }}
            >
              Login
            </Button>
          </h4>
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => setpass(e.target.value)}
          />
          <br />
          <Button variant="contained" onClick={loggin}>
            Log in
          </Button>
          <br />
          <h4>
            {" "}
            Not a User? {"   "}
            <Button
              variant="contained"
              onClick={(e) => {
                showlogin(!login);
              }}
            >
              Sign up
            </Button>
          </h4>
        </>
      )}
    </div>
  );
}

export default Register;
