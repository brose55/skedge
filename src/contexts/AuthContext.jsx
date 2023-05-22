import { createContext } from "react";

// TODO: remember what you did here
const AuthContext = createContext({
  isSignedIn: true,
  setSignedIn: () => {}
})
 
export default AuthContext
 