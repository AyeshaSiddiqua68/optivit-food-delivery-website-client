import { useEffect, useState } from "react";
import axios from "axios";
const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/services")
            .then((res) => {
                setServices(res.data);
            });
    }, []);
    return services;
};

export default useServices;