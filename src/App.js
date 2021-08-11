import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import {ChakraProvider} from "@chakra-ui/react";
import TryIt from "./TryIt";

const App = () => {
    return (

        <ChakraProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/try" exact component={TryIt}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </ChakraProvider>
    )
}
export default App