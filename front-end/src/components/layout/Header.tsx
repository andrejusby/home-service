import { ROUTES } from "../../router/consts";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Logo from "@/images/logo.svg";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import styles from "./Header.module.scss";

const Header = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate();

  const links = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.SERVICES,
      label: "Services",
    },
    {
      href: ROUTES.ABOUT_US,
      label: "About Us",
    },
  ];

  return (
    <header className={styles.topbar}>
      <div className={styles.leftSide}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.rightSide}>
        {user ? (
          <Avatar>{user.email[0]}</Avatar>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)}>
            Login / Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
