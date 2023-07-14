import { Children, createContext } from "react";

const AuthContext = createContext()

export function ContextALL({Children}) {
    
    return(
        <AuthContext.Provider value={DadosALL} >
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthContext