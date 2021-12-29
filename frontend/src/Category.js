
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Category() {
    let params = useParams();
    let apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8080';
    console.log(apiUrl);
    const [subcategories, setSubcategories] = useState([]);
    const [subthreads, setSubthreads] = useState([]);

    useEffect(() => {
        console.log(apiUrl + "/category/" + params.categoryid);
        fetch(apiUrl + "/category/" + params.categoryid, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setSubcategories(data.categories);
            setSubthreads(data.threads);
            console.log(subcategories);
            console.log(subthreads);
        })
        .catch(e => console.log(e));
    }, []);

    return <div>
            <h1>Hello world</h1>
            <p>subcategories: {subcategories.map(obj => JSON.stringify(obj)).join(",")}</p>
            <p>subthreads: {subthreads.map(obj => JSON.stringify(obj)).join(",")}</p>
            </div>;
}

export default Category;