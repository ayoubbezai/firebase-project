import { useAuth } from "../../context/AuthContext";
import Admin from "../adminPages/Admin";
import User from "../userPages/User";

const Dashboard = () => {
    const { role } = useAuth()
<<<<<<< HEAD
    const navigate = useNavigate()

    useEffect(() => {
        if (role === "admin") {
            navigate("/admin")
        } else if (role === "user") {
            navigate("/user")
        }

    }, [role, navigate])
=======
>>>>>>> 7bae2cb0aee909451bbf674337816352e3d329f9

    return (
        <div>
            {role === "admin" ? <Admin /> : <User />}
        </div>
    )
}
export default Dashboard