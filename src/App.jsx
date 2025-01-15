import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes and Route in v6
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./pages/home/Home";
<<<<<<< HEAD
import User from "./pages/userPages/User";
import Admin from "./pages/adminPages/Admin";
=======
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
>>>>>>> 7bae2cb0aee909451bbf674337816352e3d329f9



function App() {
  return (
    < Router >
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
=======
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
 
          </Route>
>>>>>>> 7bae2cb0aee909451bbf674337816352e3d329f9
        </Routes>
      </AuthProvider>
    </Router >
  );
}

export default App;