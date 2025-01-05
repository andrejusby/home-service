import { ROUTES } from "../../router/consts";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Logo from "@/images/logo.svg";
import Button from "../common/Button";
import Avatar from "../common/Avatar";
import { CiMenuBurger } from "react-icons/ci";
import classNames from "classnames";
import styles from "./Header.module.scss";

const Header = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  

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
        {/* <div className={styles.rightSide}>
        {user ? (
          <Avatar>{user.name[0]}</Avatar>
          ) : (
            <Button onClick={() => navigate(ROUTES.LOGIN)}>
            Login / Sign Up
            </Button>
            )}
          </div> */}

        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <CiMenuBurger />
        </div>
      </div>

      <div className={styles.rightSide}>
        {user ? (
          <Avatar>{user.name[0]}</Avatar>
        ) : (
          <Button onClick={() => navigate(ROUTES.LOGIN)}>
            Login / Sign Up
          </Button>
        )}
      </div>

      <div className={classNames(styles.menuDrawer, { [styles.active]: isMenuOpen})}>
        {links.map(link => (
          <div key={link.label} className={styles.menuItem}>
            <Link to={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
