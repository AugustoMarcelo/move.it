import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/augustomarcelo.png" alt="Marcelo Augusto"/>

      <div>
        <strong>Marcelo Augusto</strong>
        <p>
          <img src="icons/level.svg" alt="Seta para cima" />
          Level {level}
        </p>
      </div>
    </div>
  )
}