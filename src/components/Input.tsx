import styles from '../styles/components/Input.module.css';

export function Input() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Digite seu username" required />
      <button type="button">
        <img src="/icons/arrow-right.svg" alt="Seta para o lado direito"/>
      </button>
    </div>
  )
}