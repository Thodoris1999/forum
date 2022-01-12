
import React, { useState } from "react";

import Post from "./Post"

function PostContainer(props) {
    const posts = props.posts.map((post) => {
        return <Post key={post.post_id.toString()} post={post}/>
    });
    return (
        <ul>{posts}</ul>
    )
}

export default PostContainer;