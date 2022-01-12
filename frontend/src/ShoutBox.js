
import React, { useState, useEffect } from "react";

import ShoutContainer from './ShoutContainer'

function Shoutbox() {
    const [shouts, setShouts] = useState([]);

    useEffect(() => {
        let apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8080';
        console.log(apiUrl + "/shoutbox");
        fetch(apiUrl + "/shoutbox", {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setShouts(data);
        })
        .catch(e => console.log(e));
    }, []);

    return <div>
            <h1>Shoutbox</h1>
            <ShoutContainer shouts={shouts}/>
           </div>;
}

export default Shoutbox;