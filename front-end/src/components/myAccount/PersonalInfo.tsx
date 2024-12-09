import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Avatar from "../common/Avatar";
import styles from "./PersonalInfo.module.scss";

const PersonalInfo = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <p>No user data available</p>;
  }
  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.avatarSection}>
        <Avatar isDropdownActive={false} />
      </div>
      <div className={styles.infoSection}>
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;
