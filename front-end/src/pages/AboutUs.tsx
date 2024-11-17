import AboutUsHero from "../components/aboutUs/AboutUsHero";
import OurHistory from "../components/aboutUs/OurHistory";
import OurMission from "../components/aboutUs/OurMission";
import TeamCard from "../components/aboutUs/TeamCard";
import { teamMates } from "../components/aboutUs/consts";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <main className={styles.container}>
      <AboutUsHero />
      <OurHistory />
      <OurMission />

      <section className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMates.map((teamMate) => (
            <TeamCard key={teamMate.name} teamMate={teamMate} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
