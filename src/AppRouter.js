import'./App.css';
import Footer from './Componenter/header and footer/Footer';
import Header from './Componenter/header and footer/Header';
import FrontPage from './Componenter/front/Main';
import Login from './Componenter/login/Login';
import About from './Componenter/about/About';
import Signup from './Componenter/login/signup';
import {Switch, Route, useHistory } from 'react-router-dom';

function AppRouter() {
    return (
    <div className="AppRouter">
        <Header text ="HEADER" />
        <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/" render={()=><FrontPage />}></Route>
            <Route path="/" ><FrontPage /></Route>
        </Switch>
        <Footer text="Footer" />
    </div>  )
}
export default AppRouter;