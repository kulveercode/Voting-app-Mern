import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import { BASE_URL } from "../../service.js";
import { toast } from "react-toastify";

function Login() {
    const storeTokenInLS = useAuth();
    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        password: "",
        aadharCardnumber: "",
        role: "voter",
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.time]: e.target.value});
    };

    const login = async() => {
        let responseData;
        await fetch(`${BASE_URL}/api/v1/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((data) => (responseData = data));

        if(responseData.success) {
            if(formData.role === 'admin') {
                toast.success("Login Successfull");
                storeTokenInLS(responseData.token);
                navigate("/admin");
            } else {
                toast.success("Login Successfull");
                storeTokenInLS(responseData.token);
                navigate("/voter");
            }
        } else {
            toast.error("Login failed,Please check your credentials.");
        }
    };

  return (
    <div className="login">
      <div className="login-container">
        <div className="image-holder"></div>
        <div className="form">
          <h2>
            <strong>Login</strong>
          </h2>
          <input
            type="text"
            className="form-control"
            name="aadharCardNumber"
            placeholder="Aadhar Number"
            onChange={changeHandler}
            value={formData.aadharCardnumber}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
            value={formData.password}
          />
          <select name="role" className="select">
            <option value="voter">Voter</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <button className="btn" onClick={login}>Continue</button>
          <h2 className="already">Create an Account? {" "} <span>
            <Link to="/register">Register</Link>
          </span></h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
