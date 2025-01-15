import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes and Route in v6
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./pages/home/Home";
import User from "./pages/userPages/User";
import Admin from "./pages/adminPages/Admin";



function App() {
  return (
    < Router >
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AuthProvider>
    </Router >
  );
}

export default App;