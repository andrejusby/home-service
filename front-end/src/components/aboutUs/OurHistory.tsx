import styles from "./OurHistory.module.scss";

const OurHistory = () => {
  return (
    <section className={styles.history}>
      <h2>Our History</h2>
      <p>
        Founded in 2023, our company has been dedicated to providing the best
        home services. Over the years, we have grown from a small startup to a
        well-known service provider, constantly striving for excellence.
      </p>
      <img
        src="https://images.unsplash.com/photo-1725779792558-0255366d005c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBoaXN0b3J5fGVufDB8fDB8fHww"
        alt="History"
        className={styles.historyImage}
      />
    </section>
  );
};

export default OurHistory;
