import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
    const { role } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (role === "admin") {
            navigate("/admin")
        } else if (role === "user") {
            navigate("/user")
        }

    }, [role, navigate])

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">loading...</h1>
        </div>
    )
}
export default Dashboard