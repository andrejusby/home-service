import { PropsWithChildren, useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import { UserContext } from "../../context/UserContext";
import styles from "./Avatar.module.scss";


const Avatar = ({ children }: PropsWithChildren) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { logout } = useContext(UserContext); // Pasiimame logout funkcija is userContext

  const handleToggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  

  return (
    <div
      className={styles.avatar}
      onClick={handleToggleDropDown}
      ref={dropdownRef}
    >
      {children}
      {isDropDownOpen && (
        <div className={styles.dropdown}>
          <div
            className={styles.dropdownItem}
            onClick={() => navigate(ROUTES.MY_ACCOUNT)}
          >
            My Account
          </div>
          <div
            className={styles.dropdownItem}
            onClick={() => navigate(ROUTES.MY_BOOKING)}
          >
            My Booking
          </div>
          <div
            className={styles.dropdownItem}
            onClick={logout} // Pridedame logout funkcija
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
