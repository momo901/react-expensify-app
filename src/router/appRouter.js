import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/homePage'
import CreatePage from '../components/createPage'
import EditPage from '../components/editPage'
import ContactPage from '../components/contactPage'
import AboutPage from '../components/aboutPage'
import NotFoundPage from '../components/notFoundPage'
import Header from '../components/header'
import AntdComponent from '../components/antdComponent'
const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/> 
                <Route path="/create" component={CreatePage}/>
                <Route path="/edit/:id" component={EditPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/ant" component={AntdComponent}/>
                <Route  component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;