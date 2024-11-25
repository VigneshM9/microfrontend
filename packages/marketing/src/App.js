import React from "react";
import {Switch, BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import { Route } from "react-router-dom/cjs/react-router-dom.min";

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} /> 
                    <Route exact path='/' component={Landing} /> 
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}