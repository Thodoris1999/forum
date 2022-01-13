
import React from "react";
import { Link } from "react-router-dom"

function Subcategory(props) {
    return (
    <div>
        <Link to={ "/category/"+ props.category.category_id +""  } >{props.category.title}</Link>
    </div>
    )
}

export default Subcategory;