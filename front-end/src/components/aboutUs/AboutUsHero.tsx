import styles from "./AboutUsHero.module.scss";


const AboutUsHero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>About Us</h1>
      <p>
        Learn more about our mission, values, and the team that makes everything
        possible
      </p>
      <img
        src="https://plus.unsplash.com/premium_photo-1661759404487-083b4a9703e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Team"
        className={styles.heroImage}
      />
    </section>
  );
};

export default AboutUsHero;
