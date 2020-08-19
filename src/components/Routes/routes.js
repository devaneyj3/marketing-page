import React from 'react';
import { Route, Redirect } from 'react-router';
import Home from '../Home/home'
import About from '../About/about'
import Contact from '../Contact/contact'

const routes = () => {
    return (
        <>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Redirect from='/' to='/home'/>
        </>
    )
}

export default routes