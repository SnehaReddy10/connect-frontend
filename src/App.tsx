import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Issues from './components/Issues';
import Room from './components/Room';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import { UserProvider } from './context/user.context';

function App() {
  return (
    <div className="relative">
      <UserProvider>
        <div className="bg-gradient text-white px-4 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
