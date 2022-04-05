import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Shop from "./Shop/Shop";

const Views:FC = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/services'>
                <Services/>
            </Route>
            <Route path='/shop'>
                <Shop/>
            </Route>
        </Switch>
    )
};

export default Views;