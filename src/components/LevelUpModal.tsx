import React, { useContext } from "react";

import styles from "../styles/components/LevelUpModal.module.css";
import { ChallengeContext } from "../context/ChallengeContext";

export default function LevelUpModal() {
  const { level, closeLevelModal } = useContext(ChallengeContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelModal}>
          <img src="/icons/close.svg" alt="Fechar modal " />
        </button>
      </div>
    </div>
  );
}
