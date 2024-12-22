import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Imps from "./pages/Imps";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile"
import Create_post from "./pages/Create_post";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      {/* <h1 className='text-center'>Hello guyz</h1> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/imps" element={<Imps />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create_post" element={<Create_post />} />
        </Routes>
        <Footer />
        <ToastContainer position="bottom-left" />
      </BrowserRouter>
    </>
  );
};

export default App;
