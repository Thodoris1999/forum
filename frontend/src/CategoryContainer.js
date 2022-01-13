
import React from "react";

import Subcategory from './Subcategory'
import Subthread from './Subthread'

function CategoryContainer(props) {

    const subcategoryJSX = props.subcategories.map((subcategory) => {
        return <Subcategory key={subcategory.category_id.toString()} category={subcategory}/>
    });
    const subthreadJSX = props.subthreads.map((subthread) => {
        return <Subthread key={subthread.thread_id.toString()} thread={subthread}/>
    });

    return <div>
                {subcategoryJSX}
                {subthreadJSX}
           </div>;
}

export default CategoryContainer;