import ChangePasswordForm from "../components/myAccount/ChangePasswordForm";
import PersonalInfo from "../components/myAccount/PersonalInfo";
import BookingsList from "../components/booking/BookingsList";
import styles from "./MyAccount.module.scss";

const MyAccount = () => {
  

  return (
    <main className={styles.container}>
      <h1>My Account</h1>

      <section className={styles.section}>
        <PersonalInfo />
      </section>

      <section className={styles.section}>
        <h2>Change Password</h2>
        <ChangePasswordForm />
      </section>

      <section className={styles.section}>
        <h2>Recent Bookings</h2>
        <BookingsList displayMode="compact" />
      </section>
    </main>
  );
};

export default MyAccount;
