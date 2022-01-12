

import React, { useState } from "react";

function Subthread(props) {
    return <li>{JSON.stringify(props.thread)}</li>
}

export default Subthread;