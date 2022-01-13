import {Link} from "react-router-dom";
import './NavigationBar.css';

function NavigationBar(props){
    return (

<ul class="topnav">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/inbox">Inbox</Link></li>
  <li><Link to="/outbox">Outbox</Link></li>
  <li className="right"><Link to="/register">Register</Link></li>
  <li className="right"><Link to="/login" className="right">Login</Link></li>
</ul>
  
)
};

export default NavigationBar;