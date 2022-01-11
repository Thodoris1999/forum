
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PostContainer from './PostContainer'

function Thread() {
    let params = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8080';
        console.log(apiUrl + "/thread/" + params.threadid);
        fetch(apiUrl + "/thread/" + params.threadid, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data);
            //console.log(posts);
        })
        .catch(e => console.log(e));
    }, [params.threadid]);

    return <div>
            <h1>Thread page</h1>
            <PostContainer posts={posts}/>
           </div>;
}

export default Thread;