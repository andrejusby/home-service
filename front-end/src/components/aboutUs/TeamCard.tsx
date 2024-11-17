import { Team } from "./types";
import styles from "./TeamCard.module.scss";

interface TeamMatesProps {
  teamMate: Team;
}

const TeamCard = ({ teamMate }: TeamMatesProps) => {
  return (
    <div className={styles.teamMember}>
      <img src={teamMate.photo} alt={teamMate.name} />
      <h3>{teamMate.name}</h3>
      <p>{teamMate.position}</p>
    </div>
  );
};

export default TeamCard;
