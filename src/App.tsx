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
    <div>
      <UserProvider>
        <div className="bg-gradient h-full w-full text-white pt-1 pb-4 px-4 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
