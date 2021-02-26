import React, { useContext } from "react";

import styles from "../styles/components/Profile.module.css";
import { ChallengeContext } from "../context/ChallengeContext";

export default function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/DaniloLima122.png" alt="Danilo Lima" />
      <div>
        <strong>Danilo Lima</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
