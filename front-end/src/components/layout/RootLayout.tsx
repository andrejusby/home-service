import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./Layout.module.scss";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.rootContainer}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
