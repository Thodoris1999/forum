
import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        let apiUrl = process.env.API_URL || 'http://127.0.0.1:3680';
        console.log(apiUrl);
        this.state = {categories: []};

        fetch(apiUrl, {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                categories: data
            });
            console.log(this.state.categories);
        })
        .catch(e => console.log(e));
    }

    render() {
        return <div>
                <h1>Hello world</h1>
                <p>categories: {this.state.categories.map(obj => JSON.stringify(obj)).join(",")}</p>
               </div>;
    }
}

export default Home;