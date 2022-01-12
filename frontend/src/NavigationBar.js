import {Link} from "react-router-dom";
import './NavigationBar.css';

function NavigationBar(props){
    return (

<ul class="topnav">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/inbox">Inbox</Link></li>
  <li><Link to="/outbox">Outbox</Link></li>
  <li class = "right"><Link to="/register">Register</Link></li>
  <li class = "right"><Link to="/login" class = "right">Login</Link></li>
</ul>
  
)
};

export default NavigationBar;