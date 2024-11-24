import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ChangePasswordForm from "../components/myAccount/ChangePasswordForm";
import styles from "./MyAccount.module.scss";

const MyAccount = () => {
  const { user } = useContext(UserContext);

  return (
    <main className={styles.container}>
      <h1>My Account</h1>

      <section className={styles.section}>
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </section>

      <section className={styles.section}>
        <h2>Change Password</h2>
        <ChangePasswordForm />
      </section>
    </main>
  );
};

export default MyAccount;
