import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Reaction from "./Reaction";
import {Matches} from "./Matches";

export class Main extends React.Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/matches'>
                        <Matches/>
                    </Route>
                    <Route path='/'>
                        <Reaction/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
