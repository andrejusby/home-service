import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, SyntheticEvent } from "react";
import { ROUTES } from "../router/consts";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../components/user/api";
import styles from "./Login.module.scss";

const Login = () => {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await loginUser({ email, password });
      login(response);
      navigate(ROUTES.HOME);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
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
        <Button type="submit">Log in</Button>
        <div className={styles.link}>
          <Link to={ROUTES.REGISTER} className={styles.signUp}>
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
