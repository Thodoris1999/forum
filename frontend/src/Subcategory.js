

import React, { useState } from "react";

function Subcategory(props) {
    return <li>{JSON.stringify(props.category)}</li>
}

export default Subcategory;