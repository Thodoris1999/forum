

import React, { useState } from "react";

function Post(props) {
    return <li>{JSON.stringify(props.post)}</li>
}

export default Post;