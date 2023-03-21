import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Doctor from './components/Doctor';
import DoctorDetails from './components/DoctorDetails';
import Department from './components/Department';
import Contact from './components/Contact';
import About from './components/About';
import Appointment from './components/Appointment';
import Auth from './components/Auth';
import Signup from './components/Signup';
import PrivateRoute from './roots/PrivateRoute';
import AppointmentList from './components/AppointmentList';
import MedicineAPI from './components/MedicineAPI';
import Counter from './components/Counter';
import Medicine from './components/Medicine';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctor' element={<PrivateRoute><Doctor /></PrivateRoute>} />
        <Route path='/doctor/:id' element={<PrivateRoute><DoctorDetails /></PrivateRoute>} />
        <Route path='/department' element={<Department />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/appointment-list' element={<AppointmentList />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/medicineapi' element={<MedicineAPI />} />
        <Route path='/medicine' element={<Medicine />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
