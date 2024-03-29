import { useEffect, useState } from "react";
import axios from "axios";

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios
            .get("https://stormy-savannah-30546.herokuapp.com/services")
            .then((res) => {
                setServices(res.data);
            });
    }, []);
    return services;
};

export default useServices;