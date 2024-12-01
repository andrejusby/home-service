import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const PersonalInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2>Personal Information</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </>
  );
};

export default PersonalInfo;
