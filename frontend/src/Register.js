
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Register() {
    let params = useParams();

    useEffect(() => {
        let apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8080';
        console.log(apiUrl + "/register/" + params.threadid);
        fetch(apiUrl + "/register/" + params.threadid, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(e => console.log(e));
    }, []);

    return <div>
            <h1>Register</h1>
           </div>;
}

export default Register;