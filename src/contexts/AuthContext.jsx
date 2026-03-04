import { createContext, useContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

// need you to hook this up with firebase
// we need login, signup (also with google), logout and reset password
// the functions are already wired into the login/signup pages, just fill them in
export const AuthProvider = ({ children }) => {
  const value = {
    user: null,
    loading: false,
    login: async () => {},
    signup: async () => {},
    loginWithGoogle: async () => {},
    logout: async () => {},
    resetPassword: async () => {},
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
