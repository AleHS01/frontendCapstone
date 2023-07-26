import { useEffect } from "react";
import { useNavigate } from 'react-router'

const FailurePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        alert("PaymentFailed");
        navigate("/activate");
    }, [navigate]);

    return null
}

export default FailurePage
