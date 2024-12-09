import {
  PropsWithChildren,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import { UserContext } from "../../context/UserContext";
import styles from "./Avatar.module.scss";

interface AvatarProps extends PropsWithChildren {
  isDropdownActive?: boolean;
}

const Avatar = ({ children, isDropdownActive = true }: AvatarProps) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { logout, user } = useContext(UserContext);

  const handleToggleDropDown = () => {
    if (isDropdownActive) {
      setDropDownOpen(!isDropDownOpen);
    }
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
    if (isDropdownActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownActive]);

  if (!user) {
    return null;
  }

  const userInitial = user.name ? user.name[0].toUpperCase() : ''

  return (
    <div
      className={`${styles.avatar} ${
        !isDropdownActive ? styles.notActive : ""
      }`}
      onClick={handleToggleDropDown}
      ref={dropdownRef}
    >
      {children || userInitial}
      {isDropdownActive && isDropDownOpen && (
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
          <div className={styles.dropdownItem} onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
