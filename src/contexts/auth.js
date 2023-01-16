import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    console.log(email);
    console.log(password);
    alert("LOGADO COM SUCESSO");
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
