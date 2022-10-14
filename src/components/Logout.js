import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import alertContext from "../context/alert/alertContext";

const Logout = () => {
    const context = useContext(alertContext);
    const{ showAlert, setdisplay} = context;
    const navigate = useNavigate();
    const handleClick = async () => {
        const response = await fetch("http://127.0.0.1:8000/logout_token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "http://127.0.0.1:3000/",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(response);
        const json = await response.json();
        console.log(json);
        if(response.ok)
        {   localStorage.removeItem("token")
            setdisplay("block");
            showAlert({type: "success", msg: "Successfully Logged out"});
            navigate("/")
        } else {
            setdisplay("block");
            showAlert({type: "danger", msg: Object.values(json)[0]})

        }
    }
  return (
    <div><button onClick={handleClick}>logout</button></div>
  )
}

export default Logout