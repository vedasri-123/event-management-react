import {Link,useNavigate} from 'react-router-dom';
export default function Navbar(){
 const navigate=useNavigate(); const user=localStorage.getItem('eventUser');
 const logout=()=>{localStorage.removeItem('eventUser');navigate('/login');};
 return <nav className="navbar"><Link className="brand" to="/">EventHub</Link><div className="navlinks"><Link to="/">Home</Link><Link to="/events">Events</Link>{user&&<Link to="/my-bookings">My Bookings</Link>}{user?<button onClick={logout}>Logout</button>:<><Link to="/login">Login</Link><Link className="nav-signup" to="/signup">Sign Up</Link></>}</div></nav>;
}
