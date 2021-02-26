import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <a href="https://github.com/alvesluc"><img src="https://github.com/alvesluc.png" alt="Lucas Alves" /></a>
      <div>
        <strong><a href="https://github.com/alvesluc">alvesluc</a></strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
