import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Form, Formik, FormikHelpers} from "formik";
import FormikField from "../common/FormikInput";
import Button from "../common/Button";
import axiosInstance from "../../config/axios";
import { ChangePassword } from "./types";
import { passwordValidationSchema, passwordInitialValues } from "./consts";
import styles from "./ChangePasswordForm.module.scss";

const ChangePasswordForm = () => {
  const { user } = useContext(UserContext);

  const handleSubmit = async ( values: ChangePassword, { setSubmitting, resetForm }: FormikHelpers<ChangePassword> ) => {
    try {
      const response = await axiosInstance.post('/user/change-password', {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword
      })

      if (response.status === 200) {
        alert('Password changed successfully!')
        resetForm(); 
      }
    } catch (error: any) {
      alert(error.response?.data?.message || 'Error changing password')
    } finally {
      setSubmitting(false)
    }

  };

  return (
    <Formik
      initialValues={passwordInitialValues}
      validationSchema={passwordValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="oldPassword">Current Password:</label>
            <FormikField
              type="password"
              name="oldPassword"
              placeholder="Enter current password"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="newPassword">New Password:</label>
            <FormikField
              type="password"
              name="newPassword"
              placeholder="Enter new password"
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update Password"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordForm;
