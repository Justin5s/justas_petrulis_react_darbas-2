import { Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './Pages/HomePage/HomePage';
import Header from './components/Header/Header';
import LoginPage from './Pages/LoginPage/LoginPage';
import AddPage from './Pages/AddPage/AddPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Toaster />
      <Header />
      <Switch>
        <Route path={'/register'}>
          <RegisterPage />
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <ProtectedRoute path={'/add'}>
          <AddPage />
        </ProtectedRoute>
        <ProtectedRoute path={'/'}>
          <HomePage />
        </ProtectedRoute>
        <Route path={'*'}>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
