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
                    <Route exact path="/about" component={TryIt}/>
                    <Route  path="/" component={TryIt}/>
                </Switch>
            </BrowserRouter>
        </ChakraProvider>
    )
}
export default App