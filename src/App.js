import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeAll from './pages/Home/HomeAll/HomeAll';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import Header from './pages/Home/Header/Header';

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <HomeAll></HomeAll>
          </Route>
          <Route path='/homeAll'>
            <HomeAll></HomeAll>
          </Route>
          <Route path='/login'>
            <Header></Header>
          <LoginPage></LoginPage>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
