import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./Layout.module.scss";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.authContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
