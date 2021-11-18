import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AuthContext = createContext();

//provider
const AuthProvider = ({ children }) => {
    const services = useServices();
    const allAuthInfo = useFirebase();
    const data = {
        allAuthInfo, services,
    };
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;