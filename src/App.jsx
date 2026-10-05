import {Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Booking from './pages/Booking';
import MyBookings from './pages/MyBookings';

const PrivateRoute=({children})=>localStorage.getItem('eventUser')?<>{children}</>:<Navigate to="/login" replace/>;

export default function App(){
 return <>
  <Navbar/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/events" element={<Events/>}/>
   <Route path="/events/:id" element={<EventDetails/>}/>
   <Route path="/booking/:id" element={<PrivateRoute><Booking/></PrivateRoute>}/>
   <Route path="/my-bookings" element={<PrivateRoute><MyBookings/></PrivateRoute>}/>
   <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
 </>;
}
