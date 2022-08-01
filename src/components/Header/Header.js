import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import css from './Header.module.css';
import { useAuthCtx } from '../../store/authContext';

function Header() {
  const { isUserLoggedIn, logout, userEmail } = useAuthCtx();
  return (
    <header className={css['header']}>
      <nav className={css['main-nav']}>
        <div className={css['logo']}>
          <img src='https://www.thebalancesmb.com/thmb/QmjsnJx7gEhD6GlWo9FSUTItXLQ=/1425x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/looka-3570a1daac18406e8d9389daf79d8d76.png' alt='logo' />
        </div>
        <div className={css['nav-link-container']}>
          {isUserLoggedIn && <p className={css['user-email']}>Logged: {userEmail}</p>}

          {!isUserLoggedIn && (
            <>
              <NavLink className={css['nav-link']} to={'/register'}>
                Register
              </NavLink>
              <NavLink className={css['nav-link']} to={'/login'}>
                Login
              </NavLink>
            </>
          )}

          {isUserLoggedIn && (
            <>
              <NavLink className={css['nav-link']} to={'/home'}>
                Home
              </NavLink>
              <NavLink className={css['nav-link']} to={'/add'}>
                Add
              </NavLink>
              <NavLink
                onClick={() => {
                  logout();
                  isUserLoggedIn ? toast.success('You are logged out.') : toast.error('Error in logout.');
                }}
                className={css['nav-link']}
                to={'/login'}
              >
                Logout
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
