import { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import { ROUTES } from "../router/consts";
import Input from "../components/common/Input";
import { registerUser } from "../components/user/api";
import styles from "./Login.module.scss";
import Button from "../components/common/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      await registerUser({ name, email, password });
      navigate(ROUTES.LOGIN);
      enqueueSnackbar("Registration successful", {
        variant: "success",
      });
    } catch (err) {
      const errorMessage = err as AxiosError<{ message: string }>;
      console.error(errorMessage);
      enqueueSnackbar(errorMessage.response?.data.message ?? "", {
        variant: "error",
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        <Input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={styles.input}
        />
        <Button type="submit">Register</Button>
        <div className={styles.link}>
          <Link to={ROUTES.LOGIN} className={styles.signUp}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
