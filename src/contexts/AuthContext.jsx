import { createContext } from "react";

// context allows us to have a global state for our app
// instead of having to rely on prop drilling

// to create a context, we have to use a built-in react hook
const AuthContext = createContext({
  // to allow future devs to know the shape of the context, we provide the following 
  isSignedIn: false,
  setSignedIn: () => {
    // error to tell devs not to use setSignedIn outside of a provider
    throw new Error(
			"You are trying to consume the context outside of a provider. setSignedIn is not initialized."
		); 
  }
})
 
export default AuthContext
 