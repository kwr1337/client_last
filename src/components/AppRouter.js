import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {publicRouters} from "../router";

const AppRouter = () => {
    return (
        <Switch>
            {publicRouters.map(({path, Component}) =>
                <Route key={path} exact path={path} component={Component}/>
            )}
        </Switch>
    );
};

export default AppRouter;