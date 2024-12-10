import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    const { success, message } = await logout();
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
    navigate('/');
  };
  
  return (
    <div className="navbar">
      <div className="site_name">
        THE_SOCIAL_SITE
      </div>
      <ul className="nav_list text-sm">
        <li>
          <Link to="/"> HOME</Link>
        </li>

        {!isAuthenticated ? (
          <>
            <li>
              <Link to="/login"> LOG_IN</Link>
            </li>
            <li>
              <Link to="/register"> REGISTER</Link>
            </li>
          </>
        ) : (
          <>
            <li>            
              <button onClick={handleLogout} className="button">
                LOG_OUT
              </button>
            </li>
            <li>
              <Link to="/profile"> PROFILE </Link>
            </li>
          </>
        )}

        <li>
          <Link to="/imps">IMPS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
