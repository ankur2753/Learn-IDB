import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
const App=()=>{
  return(

    <ChakraProvider>
      <Router>
        <Switch>
          <Route path='/aboutMe'></Route>
          <Route path='/'>
            <Home key='homePage' />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  )
}
export default App