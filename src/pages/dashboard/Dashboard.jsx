    import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
    const { role } = useAuth()
    
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Role: {role}</p>
        </div>
    )
}
export default Dashboard