import { createContext } from "react";

const AuthContext = createContext({
  isSignedIn: true,
  setSignedIn: () => {}
})
 
export default AuthContext
 