import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className={css['not-found-container']}>
      <h1>Not found 404</h1>
      <p>Page not exist.</p>
      <Link to={'/login'}>Go to login page</Link>
    </div>
  );
}

export default NotFoundPage;
