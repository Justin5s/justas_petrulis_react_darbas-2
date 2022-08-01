import { useAuthCtx } from '../../store/authContext';
import { Link, Route } from 'react-router-dom';
import css from './ProtectedRoute.module.css';

function ProtectedRoute(props) {
  const { isUserLoggedIn } = useAuthCtx();
  const { children, ...rest } = props;
  return (
    <Route {...rest}>
      {isUserLoggedIn ? (
        children
      ) : (
        <div className={css['protected-container']}>
          <h2>If you are a user already, please login</h2>
          <Link to={'/login'}>Push here!</Link>
        </div>
      )}
    </Route>
  );
}

export default ProtectedRoute;
