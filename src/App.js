import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeAll from './pages/Home/HomeAll/HomeAll';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import Header from './pages/Home/Header/Header';
import AuthContextProvider from './Context/AuthContextProvider';
import Book from './pages/Home/Book/Book';
import PrivateRouter from './Context/PrivateRouter';
import Trips from './pages/Home/Trips/Trips';
import MyTrip from './pages/MyTrip/MyTrip';
import ManageTrip from './ManageTrip/ManageTrip';
import AddTrip from './AddTrip/AddTrip';
import NotFound from './pages/NotFound/NotFound';
import Fotter from './pages/Home/Fotter/Fotter';
import Contact from './Contact/Contact';
import About from './pages/Home/About/About';

function App() {
  return (
    <div className="">
          <AuthContextProvider>
          <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <HomeAll></HomeAll>
          </Route>
          <Route path='/homeAll'>
            <HomeAll></HomeAll>
          </Route>
          <Route path='/alltrip'>
            <Header></Header>
            <Trips></Trips>
            <Fotter></Fotter>
          </Route>
          <Route path='/about'>
            <Header></Header>
              <About></About>
            <Fotter></Fotter>
          </Route>
          <Route path='/contact'>
            <Header></Header>
            <Contact></Contact>
            <Fotter></Fotter>
          </Route>
          <PrivateRouter path="/book:id">
            <Header></Header>
            <Book></Book>
          </PrivateRouter>
          <PrivateRouter path="/mytrip">
            <Header></Header>
            <MyTrip></MyTrip>
            <Fotter></Fotter>
          </PrivateRouter>
          <PrivateRouter path="/manage">
            <Header></Header>
            <ManageTrip></ManageTrip>
            <Fotter></Fotter>
          </PrivateRouter>
          <PrivateRouter path="/add">
            <Header></Header>
            <AddTrip></AddTrip>
            <Fotter></Fotter>
          </PrivateRouter>
          <Route path='/login'>
            <Header></Header>
          <LoginPage></LoginPage>
          <Fotter></Fotter>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

          </AuthContextProvider>
           </div>
  );
}

export default App;
