import { createContext } from "react";

const AuthContext = createContext({
  isSignedIn: false,
  setSignedIn: () => {}
})
 
export default AuthContext
 